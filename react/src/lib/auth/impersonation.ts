/**
 * User & tenant impersonation utilities.
 *
 * The open-source ABP Account OpenIddict module does NOT ship the
 * impersonation feature (commercial Pro only). The backend implements the
 * same <c>Impersonation</c> grant type at <c>/connect/token</c> (see
 * <c>ImpersonationGrantHandler</c>), mirroring ABP Account Pro's API.
 *
 * Impersonation is backed by a server-side session record
 * (<c>ImpersonationSession</c>). The impersonated JWT embeds ABP's official
 * impersonator claims (<c>impersonator_userid</c>, <c>impersonator_tenantid</c>,
 * <c>impersonator_username</c>) plus a project-specific
 * <c>impersonation_session_id</c> claim pointing at that session. The admin's
 * original access token is intentionally NOT embedded — exiting impersonation
 * re-issues a fresh admin token from the session via the
 * <c>BackToImpersonator</c> grant.
 *
 * Flow:
 * 1. Admin clicks "Impersonate" → {@link impersonateUser} calls
 *    <c>/connect/token</c> with <c>grant_type=Impersonation</c>.
 * 2. The backend validates the admin's bearer token, checks permissions,
 *    persists an <c>ImpersonationSession</c> and issues a new access token
 *    for the target user as a standard OAuth2 token response JSON.
 * 3. The new token is stored via <c>userManager.storeUser</c> and the page
 *    reloads so the SPA re-initialises with the impersonated session.
 * 4. While impersonating, the ABP <c>application-configuration</c> API
 *    exposes the impersonator claims via <c>currentUser.impersonatorUserId</c>
 *    etc.; ImpersonationBanner (components/layout) reads them to show a banner.
 * 5. {@link backToMyAccount} reads <c>impersonation_session_id</c> from the
 *    JWT and exchanges the impersonated token for a freshly issued admin
 *    token via <c>grant_type=BackToImpersonator</c>.
 */
import { User } from "oidc-client-ts";
import { getApiBaseUrl, getOAuthConfig } from "@/lib/runtimeConfig";
import { getTenantId } from "@/lib/tenant";
import { userManager } from "@/lib/auth/userManager";
import { localizeAbpError } from "@/lib/http/error";
import { decodeJwtPayload } from "./jwt";

/**
 * Custom OAuth2 grant type implemented by the backend's
 * `ImpersonationGrantHandler`. Must stay in sync with
 * `ImpersonationGrantHandler.GrantType` on the server.
 */
const IMPERSONATION_GRANT_TYPE = "Impersonation";

/**
 * Custom OAuth2 grant type implemented by the backend's
 * `BackToImpersonatorGrantHandler`: exchanges the current impersonated
 * token for a freshly issued admin token ("back to my account").
 */
const BACK_TO_IMPERSONATOR_GRANT_TYPE = "BackToImpersonator";

/** Claim key carrying the server-side impersonation session id. */
const CLAIM_IMPERSONATION_SESSION_ID = "impersonation_session_id";

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
 * <c>error_description</c> for known impersonation errors. Key translation is
 * centralized in <c>lib/http/error.ts</c> (localizeAbpError). For unknown
 * errors we fall back to the raw description or HTTP status.
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
        return localizeAbpError(parsed.error_description);
      }
      if (parsed.error) {
        return localizeAbpError(parsed.error);
      }
    } catch {
      // Not JSON — fall back to raw body if non-empty.
      if (rawBody.trim()) {
        return rawBody.trim();
      }
    }
  }

  return `模拟登录失败 (${response.status})`;
}

/**
 * Requests a token for the given custom grant at <c>/connect/token</c>,
 * stores the result as the active OIDC user session, then reloads the page.
 *
 * @param params Form parameters to send (e.g. `{ user_id }` or `{ tenant_id }`).
 * @param options.sendTenantHeader When `true` (default), sends the current
 *   localStorage tenant ID as the `__tenant` header so the backend resolves
 *   the target user in the correct tenant. Set to `false` for flows where the
 *   backend switches tenant internally via `ICurrentTenant.Change`.
 */
async function requestTokenAndSwitchSession(
  grantType: string,
  params: Record<string, string>,
  options: { sendTenantHeader?: boolean } = {},
): Promise<void> {
  const user = await userManager.getUser();
  if (!user?.access_token) {
    throw new Error("Not authenticated");
  }

  const formBody = new URLSearchParams({
    grant_type: grantType,
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

  const nextUser = new User({
    access_token: token.access_token,
    refresh_token: token.refresh_token,
    token_type: token.token_type ?? "Bearer",
    scope: token.scope ?? user.scope,
    profile: payload as User["profile"],
    expires_at: expiresAt,
  });

  await userManager.storeUser(nextUser);
  // Full reload so OIDC state, app config and tenant context are reinitialized.
  window.location.replace("/");
}

/**
 * Impersonates the specified user by requesting a new access token via the
 * <c>Impersonation</c> custom grant type at <c>/connect/token</c>.
 * The caller must hold the <c>AbpIdentity.Users.Impersonation</c> permission.
 */
export async function impersonateUser(userId: string): Promise<void> {
  await requestTokenAndSwitchSession(IMPERSONATION_GRANT_TYPE, { user_id: userId });
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
  await requestTokenAndSwitchSession(
    IMPERSONATION_GRANT_TYPE,
    { tenant_id: tenantId },
    { sendTenantHeader: false },
  );
}

/**
 * Exits impersonation: reads <c>impersonation_session_id</c> from the current
 * JWT and calls the <c>BackToImpersonator</c> grant, which validates the
 * server-side session and issues a fresh token for the original admin.
 * Throws if not currently impersonating.
 */
export async function backToMyAccount(): Promise<void> {
  const user = await userManager.getUser();
  if (!user?.access_token) {
    throw new Error("Not authenticated");
  }

  // user.profile is the decoded JWT payload (populated by oidc-client-ts).
  const sessionId = user.profile[CLAIM_IMPERSONATION_SESSION_ID];
  if (!sessionId) {
    throw new Error("Not currently impersonating");
  }

  // No __tenant header: the session record identifies the impersonator's
  // tenant and the backend switches tenant internally.
  await requestTokenAndSwitchSession(
    BACK_TO_IMPERSONATOR_GRANT_TYPE,
    {},
    { sendTenantHeader: false },
  );
}
