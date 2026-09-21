/**
 * OIDC 客户端（Authorization Code + PKCE）与 access token 续期。
 *
 * 配置取自运行时配置（`dynamic-env.json` 优先，其次宿主 env）；
 * 用户存 localStorage（`oidc.<clientId>`），开启自动静默续期，
 * 并以 `public/silent-renew.html` 作为 iframe 续期兜底（有 refresh token 时优先走 refresh）。
 */
import { createAbpReactOidcAuth } from "@volo/abp-react-oidc-auth";
import { getOAuthConfig } from "../config/runtime-config";

type OidcClient = ReturnType<typeof createAbpReactOidcAuth>;
type OidcUserManager = ReturnType<OidcClient["getUserManager"]>;

/** access token 剩余有效期低于该阈值即视为"即将过期"，提前续期。 */
const TOKEN_EXPIRY_SKEW_MS = 60 * 1000;

let instance: OidcUserManager | null = null;
let client: OidcClient | null = null;
let renewInFlight: Promise<string | null> | null = null;

/** 初始化 OIDC 客户端；必须在 `loadRuntimeConfig()` 之后、渲染之前调用一次。 */
export function initUserManager(): void {
  const config = getOAuthConfig();

  client = createAbpReactOidcAuth({
    authority: config.issuer,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    postLogoutRedirectUri: config.redirectUri,
    scope: config.scope,
    responseType: config.responseType,
    automaticSilentRenew: true,
    userStoreType: "localStorage",
    userStorePrefix: `oidc.${config.clientId}`,
    silentRedirectUri:
      typeof window !== "undefined" ? `${window.location.origin}/silent-renew.html` : undefined,
  });

  instance = client.getUserManager();
  void client.init();
}

export function getAuthClient(): OidcClient {
  if (!client) {
    throw new Error(
      "[@acrostack/core] OIDC 客户端尚未初始化：请在 main.tsx 中于 loadRuntimeConfig() 之后调用 initUserManager()。",
    );
  }

  return client;
}

export const userManager = new Proxy({} as OidcUserManager, {
  get(_, prop) {
    if (!instance) {
      throw new Error(
        "[@acrostack/core] userManager 尚未初始化：请在 main.tsx 中于 loadRuntimeConfig() 之后调用 initUserManager()。",
      );
    }
    return (instance as unknown as Record<string | symbol, unknown>)[prop];
  },
});

/**
 * 取一个可用的 access token：缺失/过期/即将过期时静默续期。
 *
 * @param options.force 无视剩余有效期强制续期（401 重放使用）；续期失败返回 null。
 */
export async function ensureAccessToken(options: { force?: boolean } = {}): Promise<string | null> {
  const user = await userManager.getUser();
  if (!user?.access_token) return null;

  const expiresAt = user.expires_at;
  const expiring = expiresAt !== undefined && expiresAt - Date.now() <= TOKEN_EXPIRY_SKEW_MS;
  if (!options.force && !expiring) return user.access_token;

  if (user.refresh_token) {
    const renewed = await renewSilently();
    if (renewed) return renewed;
  }

  // 续期不可用/失败：非强制场景沿用现有 token（后续 401 会走跳登录），
  // 强制场景返回 null 让调用方直接判定为"无法续期"。
  return options.force ? null : user.access_token;
}

/** 静默续期（并发调用共享同一次续期请求）。 */
function renewSilently(): Promise<string | null> {
  renewInFlight ??= (async () => {
    try {
      const renewed = await userManager.signinSilent();
      return renewed?.access_token ?? null;
    } catch {
      // refresh token 失效/被撤销：交由调用方决定跳登录
      return null;
    }
  })().finally(() => {
    renewInFlight = null;
  });

  return renewInFlight;
}
