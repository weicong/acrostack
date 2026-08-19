/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BackgroundJobDeleteOptions, BackgroundJobDeleteResponses } from '../../models/backgroundJob/BackgroundJobDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/background-job/:id}
 */
export function backgroundJobDelete<ThrowOnError extends boolean = true>(options: Options<BackgroundJobDeleteOptions, ThrowOnError>): Promise<RequestResult<BackgroundJobDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/app/background-job/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BackgroundJobDeleteResponses, ThrowOnError>>
}
