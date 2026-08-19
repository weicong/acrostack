/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentAdminDeleteOptions, CommentAdminDeleteResponses } from '../../models/commentAdmin/CommentAdminDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export function commentAdminDelete<ThrowOnError extends boolean = true>(options: Options<CommentAdminDeleteOptions, ThrowOnError>): Promise<RequestResult<CommentAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/cms-kit-admin/comments/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentAdminDeleteResponses, ThrowOnError>>
}
