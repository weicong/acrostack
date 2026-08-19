/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { GlobalResourcePublicGetGlobalStyleOptions, GlobalResourcePublicGetGlobalStyleResponses } from '../../models/globalResourcePublic/GlobalResourcePublicGetGlobalStyle'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/global-resources/style}
 */
export function globalResourcePublicGetGlobalStyle<ThrowOnError extends boolean = true>(options: Options<GlobalResourcePublicGetGlobalStyleOptions, ThrowOnError> = {}): Promise<RequestResult<GlobalResourcePublicGetGlobalStyleResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-public/global-resources/style', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<GlobalResourcePublicGetGlobalStyleResponses, ThrowOnError>>
}
