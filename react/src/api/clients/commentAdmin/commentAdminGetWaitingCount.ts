/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentAdminGetWaitingCountOptions, CommentAdminGetWaitingCountResponses } from '../../models/commentAdmin/CommentAdminGetWaitingCount'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/comments/waiting-count}
 */
export function commentAdminGetWaitingCount<ThrowOnError extends boolean = true>(options: Options<CommentAdminGetWaitingCountOptions, ThrowOnError> = {}): Promise<RequestResult<CommentAdminGetWaitingCountResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/comments/waiting-count', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentAdminGetWaitingCountResponses, ThrowOnError>>
}
