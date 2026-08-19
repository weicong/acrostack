/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { OpenIddictApplicationDeleteOptions, OpenIddictApplicationDeleteResponses } from '../../models/openIddictApplication/OpenIddictApplicationDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function openIddictApplicationDelete<ThrowOnError extends boolean = true>(options: Options<OpenIddictApplicationDeleteOptions, ThrowOnError>): Promise<RequestResult<OpenIddictApplicationDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/app/open-iddict-application/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<OpenIddictApplicationDeleteResponses, ThrowOnError>>
}
