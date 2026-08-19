/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { OpenIddictApplicationCreateOptions, OpenIddictApplicationCreateResponses } from '../../models/openIddictApplication/OpenIddictApplicationCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/open-iddict-application}
 */
export function openIddictApplicationCreate<ThrowOnError extends boolean = true>(options: Options<OpenIddictApplicationCreateOptions, ThrowOnError>): Promise<RequestResult<OpenIddictApplicationCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/app/open-iddict-application', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<OpenIddictApplicationCreateResponses, ThrowOnError>>
}
