/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentAdminUpdateApprovalStatusPathId,
  CommentAdminUpdateApprovalStatusData,
  CommentAdminUpdateApprovalStatusStatus200,
  CommentAdminUpdateApprovalStatusStatus204,
  CommentAdminUpdateApprovalStatusStatus400,
  CommentAdminUpdateApprovalStatusStatus401,
  CommentAdminUpdateApprovalStatusStatus403,
  CommentAdminUpdateApprovalStatusStatus404,
  CommentAdminUpdateApprovalStatusStatus500,
  CommentAdminUpdateApprovalStatusStatus501,
} from "../../models/commentAdmin/CommentAdminUpdateApprovalStatus.ts";

function getCommentAdminUpdateApprovalStatusUrl(id: CommentAdminUpdateApprovalStatusPathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/comments/${id}/approval-status` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/comments/:id/approval-status}
 */
export async function commentAdminUpdateApprovalStatus(
  id: CommentAdminUpdateApprovalStatusPathId,
  data?: CommentAdminUpdateApprovalStatusData,
  config: Partial<RequestConfig<CommentAdminUpdateApprovalStatusData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    CommentAdminUpdateApprovalStatusStatus200 | CommentAdminUpdateApprovalStatusStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateApprovalStatusStatus400
      | CommentAdminUpdateApprovalStatusStatus401
      | CommentAdminUpdateApprovalStatusStatus403
      | CommentAdminUpdateApprovalStatusStatus404
      | CommentAdminUpdateApprovalStatusStatus500
      | CommentAdminUpdateApprovalStatusStatus501
    >,
    CommentAdminUpdateApprovalStatusData
  >({
    method: "PUT",
    url: getCommentAdminUpdateApprovalStatusUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
