import { createAbpReactOidcAuth } from '@volo/abp-react-oidc-auth'
import { getOAuthConfig } from '@/lib/runtimeConfig'

type OidcClient = ReturnType<typeof createAbpReactOidcAuth>
type OidcUserManager = ReturnType<OidcClient['getUserManager']>

let instance: OidcUserManager | null = null
let client: OidcClient | null = null

export function initUserManager(): void {
  const config = getOAuthConfig()

  client = createAbpReactOidcAuth({
    authority: config.issuer,
    clientId: config.clientId,
    redirectUri: config.redirectUri,
    postLogoutRedirectUri: config.redirectUri,
    scope: config.scope,
    responseType: config.responseType,
    automaticSilentRenew: true,
    userStoreType: 'localStorage',
    userStorePrefix: `oidc.${config.clientId}`,
    silentRedirectUri:
      typeof window !== 'undefined'
        ? `${window.location.origin}/silent-renew.html`
        : undefined,
  })

  instance = client.getUserManager()
  void client.init()
}

export function getAuthClient(): OidcClient {
  if (!client) {
    throw new Error(
      'OIDC client is not initialized. Call initUserManager() after loadRuntimeConfig() in main.tsx.'
    )
  }

  return client
}

export const userManager = new Proxy({} as OidcUserManager, {
  get(_, prop) {
    if (!instance) {
      throw new Error(
        'userManager not initialized. Call initUserManager() after loadRuntimeConfig() in main.tsx.'
      )
    }
    return (instance as Record<string | symbol, unknown>)[prop]
  },
})
