/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentAdminGetListOptions, CommentAdminGetListResponses } from '../../models/commentAdmin/CommentAdminGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/comments}
 */
export function commentAdminGetList<ThrowOnError extends boolean = true>(options: Options<CommentAdminGetListOptions, ThrowOnError> = {}): Promise<RequestResult<CommentAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/comments', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentAdminGetListResponses, ThrowOnError>>
}
