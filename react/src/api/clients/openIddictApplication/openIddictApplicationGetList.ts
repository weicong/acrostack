/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { OpenIddictApplicationGetListOptions, OpenIddictApplicationGetListResponses } from '../../models/openIddictApplication/OpenIddictApplicationGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/open-iddict-application}
 */
export function openIddictApplicationGetList<ThrowOnError extends boolean = true>(options: Options<OpenIddictApplicationGetListOptions, ThrowOnError> = {}): Promise<RequestResult<OpenIddictApplicationGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/open-iddict-application', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<OpenIddictApplicationGetListResponses, ThrowOnError>>
}
