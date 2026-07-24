/**
 * User & tenant impersonation utilities.
 *
 * The open-source ABP Account OpenIddict module does NOT ship the
 * impersonation feature (commercial Pro only). The backend implements the
 * same <c>Impersonation</c> grant type at <c>/connect/token</c> (see
 * <c>ImpersonationGrantHandler</c>), mirroring ABP Account Pro's API.
 *
 * The impersonated JWT embeds ABP's official impersonator claims
 * (<c>impersonator_userid</c>, <c>impersonator_tenantid</c>,
 * <c>impersonator_username</c>) plus a project-specific
 * <c>impersonator_token</c> claim (the original admin's access token) so
 * the SPA can restore the admin session via {@link backToMyAccount}.
 *
 * Flow:
 * 1. Admin clicks "Impersonate" → {@link impersonateUser} calls
 *    <c>/connect/token</c> with <c>grant_type=Impersonation</c>.
 * 2. The backend validates the admin's bearer token, checks permissions,
 *    and issues a new access token for the target user as a standard
 *    OAuth2 token response JSON.
 * 3. The new token is stored via <c>userManager.storeUser</c> and the page
 *    reloads so the SPA re-initialises with the impersonated session.
 * 4. While impersonating, the ABP <c>application-configuration</c> API
 *    exposes the impersonator claims via <c>currentUser.impersonatorUserId</c>
 *    etc.; {@link useImpersonationState} reads them to show a banner.
 * 5. {@link backToMyAccount} reads <c>impersonator_token</c> from the JWT
 *    and restores it as the active session.
 */
import { User } from "oidc-client-ts";
import i18n from "i18next";
import { getApiBaseUrl, getOAuthConfig } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";
import { userManager } from "@/lib/auth/userManager";
import { useCurrentUser } from "@/lib/auth/permissions";

export interface ImpersonationState {
  isImpersonating: boolean;
  impersonatorUserId?: string;
  impersonatorTenantId?: string;
  impersonatorUserName?: string;
}

/** Claim key used to embed the original admin's token in an impersonated JWT. */
const CLAIM_IMPERSONATOR_TOKEN = "impersonator_token";

interface TokenResponse {
  access_token: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  scope?: string;
}

/** Standard OAuth2 error response (RFC 6749 §5.2). */
interface OAuth2ErrorResponse {
  error?: string;
  error_description?: string;
  error_uri?: string;
}

/**
 * Parses a failed `/connect/token` response into a readable error message.
 *
 * The backend returns ABP localization resource keys (e.g.
 * <c>Volo.Account:NestedImpersonationIsNotAllowed</c>) as the OAuth2
 * <c>error_description</c> for known impersonation errors. We detect this
 * pattern and translate via i18next (<c>AbpAccount::Volo.Account:XXX</c>).
 * For unknown errors we fall back to the raw description or HTTP status.
 */
async function extractImpersonationError(response: Response): Promise<string> {
  let rawBody: string | undefined;
  try {
    rawBody = await response.text();
  } catch {
    // ignore — fall through to statusText
  }

  if (rawBody) {
    try {
      const parsed = JSON.parse(rawBody) as OAuth2ErrorResponse;
      if (parsed.error_description) {
        return localizeImpersonationError(parsed.error_description);
      }
      if (parsed.error) {
        return localizeImpersonationError(parsed.error);
      }
    } catch {
      // Not JSON — fall back to raw body if non-empty.
      if (rawBody.trim()) {
        return rawBody.trim();
      }
    }
  }

  return i18n.t("AbpAccount::Volo.Account:ImpersonateError") || `Impersonation failed (${response.status})`;
}

/**
 * Translates an ABP localization resource key (e.g.
 * <c>Volo.Account:NestedImpersonationIsNotAllowed</c>) into the current
 * language. Keys are prefixed with <c>AbpAccount::</c> to match the
 * en.json resource structure. Non-key strings are returned as-is.
 */
function localizeImpersonationError(description: string): string {
  if (description.startsWith("Volo.Account:")) {
    const key = `AbpAccount::${description}`;
    const translated = i18n.t(key);
    // i18next returns the key itself when no translation is found.
    return translated === key ? description : translated;
  }
  return description;
}

/**
 * Decodes the payload of a JWT without verifying its signature.
 * The token is trusted because it was issued by our own AuthServer.
 */
export function decodeJwtPayload(token: string): Record<string, unknown> {
  const parts = token.split(".");
  if (parts.length !== 3) return {};
  try {
    const base64Url = parts[1]!;
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const json = atob(padded);
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return {};
  }
}

/**
 * React hook that derives the current impersonation state from the ABP
 * application-configuration <c>currentUser</c> section, which ABP populates
 * from the JWT's impersonator claims on the server side.
 */
export function useImpersonationState(): ImpersonationState {
  const currentUser = useCurrentUser();
  if (!currentUser) return { isImpersonating: false };

  const impersonatorUserId = currentUser.impersonatorUserId ?? undefined;
  const impersonatorTenantId = currentUser.impersonatorTenantId ?? undefined;
  if (!impersonatorUserId && !impersonatorTenantId) {
    return { isImpersonating: false };
  }
  return {
    isImpersonating: true,
    impersonatorUserId,
    impersonatorTenantId,
    impersonatorUserName: currentUser.impersonatorUserName ?? undefined,
  };
}

/**
 * Calls the /connect/token endpoint with the custom <c>Impersonation</c>
 * grant type (matching ABP Account Pro's API), stores the resulting token
 * as the active OIDC user session, then reloads the page.
 *
 * @param params Form parameters to send (e.g. `{ user_id }` or `{ tenant_id }`).
 * @param options.sendTenantHeader When `true` (default), sends the current
 *   sessionStorage tenant ID as the `__tenant` header so the backend
 *   resolves the target user in the correct tenant. Set to `false` for
 *   tenant impersonation, where the caller is a host user and the backend
 *   switches tenant internally via `ICurrentTenant.Change`.
 */
async function callImpersonationEndpoint(
  params: Record<string, string>,
  options: { sendTenantHeader?: boolean } = {},
): Promise<void> {
  const user = await userManager.getUser();
  if (!user?.access_token) {
    throw new Error("Not authenticated");
  }

  const formBody = new URLSearchParams({
    grant_type: "Impersonation",
    client_id: getOAuthConfig().clientId,
    ...params,
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Bearer ${user.access_token}`,
  };
  if (options.sendTenantHeader !== false) {
    const tenantId = getTenantId();
    if (tenantId) headers.__tenant = tenantId;
  }

  const baseUrl = getApiBaseUrl().replace(/\/$/, "");
  const response = await fetch(`${baseUrl}/connect/token`, {
    method: "POST",
    headers,
    body: formBody.toString(),
  });

  if (!response.ok) {
    throw new Error(await extractImpersonationError(response));
  }

  const token = (await response.json()) as TokenResponse;
  const payload = decodeJwtPayload(token.access_token);
  const expiresAt =
    typeof payload.exp === "number"
      ? payload.exp * 1000
      : token.expires_in
        ? Date.now() + token.expires_in * 1000
        : undefined;

  const impersonatedUser = new User({
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    token_type: token.token_type ?? "Bearer",
    scope: token.scope ?? user.scope,
    profile: payload as User["profile"],
    expires_at: expiresAt,
  });

  await userManager.storeUser(impersonatedUser);
  // Full reload so OIDC state, app config and tenant context are reinitialized.
  window.location.replace("/");
}

/**
 * Impersonates the specified user by requesting a new access token via the
 * <c>Impersonation</c> custom grant type at <c>/connect/token</c>.
 * The caller must hold the <c>AbpIdentity.Users.Impersonation</c> permission.
 */
export async function impersonateUser(userId: string): Promise<void> {
  await callImpersonationEndpoint({ user_id: userId });
}

/**
 * Impersonates the admin user of the specified tenant via the
 * <c>Impersonation</c> custom grant type.
 * Host admins only — the backend rejects tenant impersonation for tenant users.
 *
 * The <c>__tenant</c> header is intentionally NOT sent: the caller is a host
 * user and the backend switches tenant internally via
 * <c>ICurrentTenant.Change(tenantId)</c> while resolving the target admin.
 */
export async function impersonateTenant(tenantId: string): Promise<void> {
  await callImpersonationEndpoint({ tenant_id: tenantId }, { sendTenantHeader: false });
}

/**
 * Reads <c>impersonator_token</c> from the current session's JWT profile and
 * restores it as the active user, effectively exiting impersonation.
 * Throws if not currently impersonating or the impersonator token is missing.
 */
export async function backToMyAccount(): Promise<void> {
  const user = await userManager.getUser();
  if (!user?.access_token) {
    throw new Error("Not authenticated");
  }

  // user.profile is the decoded JWT payload (populated by oidc-client-ts).
  const impersonatorToken = user.profile[CLAIM_IMPERSONATOR_TOKEN] as string | undefined;
  if (!impersonatorToken) {
    throw new Error("Not currently impersonating");
  }

  const restoredPayload = decodeJwtPayload(impersonatorToken);
  const expiresAt =
    typeof restoredPayload.exp === "number" ? restoredPayload.exp * 1000 : undefined;

  const restoredUser = new User({
    access_token: impersonatorToken,
    token_type: "Bearer",
    profile: restoredPayload as User["profile"],
    expires_at: expiresAt,
    scope: user.scope,
  });

  await userManager.storeUser(restoredUser);
  // Full reload so OIDC state, app config and tenant context are reinitialized.
  window.location.replace("/");
}
