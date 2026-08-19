/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentAdminGetOptions, CommentAdminGetResponses } from '../../models/commentAdmin/CommentAdminGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export function commentAdminGet<ThrowOnError extends boolean = true>(options: Options<CommentAdminGetOptions, ThrowOnError>): Promise<RequestResult<CommentAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/comments/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentAdminGetResponses, ThrowOnError>>
}
