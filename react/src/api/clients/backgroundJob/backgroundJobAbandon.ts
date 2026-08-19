/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BackgroundJobAbandonOptions, BackgroundJobAbandonResponses } from '../../models/backgroundJob/BackgroundJobAbandon'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/background-job/:id/abandon}
 */
export function backgroundJobAbandon<ThrowOnError extends boolean = true>(options: Options<BackgroundJobAbandonOptions, ThrowOnError>): Promise<RequestResult<BackgroundJobAbandonResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/app/background-job/{id}/abandon', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BackgroundJobAbandonResponses, ThrowOnError>>
}
