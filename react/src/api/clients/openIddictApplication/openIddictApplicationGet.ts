/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { OpenIddictApplicationGetOptions, OpenIddictApplicationGetResponses } from '../../models/openIddictApplication/OpenIddictApplicationGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function openIddictApplicationGet<ThrowOnError extends boolean = true>(options: Options<OpenIddictApplicationGetOptions, ThrowOnError>): Promise<RequestResult<OpenIddictApplicationGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/open-iddict-application/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<OpenIddictApplicationGetResponses, ThrowOnError>>
}
