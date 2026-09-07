/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  CommentAdminUpdateApprovalStatusOptions,
  CommentAdminUpdateApprovalStatusResponses,
} from "../../models/commentAdmin/CommentAdminUpdateApprovalStatus";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/comments/:id/approval-status}
 */
export function commentAdminUpdateApprovalStatus<ThrowOnError extends boolean = true>(
  options: Options<CommentAdminUpdateApprovalStatusOptions, ThrowOnError>,
): Unwrappable<RequestResult<CommentAdminUpdateApprovalStatusResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/comments/{id}/approval-status",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<CommentAdminUpdateApprovalStatusResponses, ThrowOnError>>,
  );
}
