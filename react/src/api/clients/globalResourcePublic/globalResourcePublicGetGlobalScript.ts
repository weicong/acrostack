/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { GlobalResourcePublicGetGlobalScriptOptions, GlobalResourcePublicGetGlobalScriptResponses } from '../../models/globalResourcePublic/GlobalResourcePublicGetGlobalScript'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/global-resources/script}
 */
export function globalResourcePublicGetGlobalScript<ThrowOnError extends boolean = true>(options: Options<GlobalResourcePublicGetGlobalScriptOptions, ThrowOnError> = {}): Promise<RequestResult<GlobalResourcePublicGetGlobalScriptResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-public/global-resources/script', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<GlobalResourcePublicGetGlobalScriptResponses, ThrowOnError>>
}
