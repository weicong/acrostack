/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BackgroundJobGetOptions, BackgroundJobGetResponses } from '../../models/backgroundJob/BackgroundJobGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/background-job/:id}
 */
export function backgroundJobGet<ThrowOnError extends boolean = true>(options: Options<BackgroundJobGetOptions, ThrowOnError>): Promise<RequestResult<BackgroundJobGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/background-job/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BackgroundJobGetResponses, ThrowOnError>>
}
