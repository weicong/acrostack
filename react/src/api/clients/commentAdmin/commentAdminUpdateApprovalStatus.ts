/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentAdminUpdateApprovalStatusOptions, CommentAdminUpdateApprovalStatusResponses } from '../../models/commentAdmin/CommentAdminUpdateApprovalStatus'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/comments/:id/approval-status}
 */
export function commentAdminUpdateApprovalStatus<ThrowOnError extends boolean = true>(options: Options<CommentAdminUpdateApprovalStatusOptions, ThrowOnError>): Promise<RequestResult<CommentAdminUpdateApprovalStatusResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-admin/comments/{id}/approval-status', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentAdminUpdateApprovalStatusResponses, ThrowOnError>>
}
