/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentPublicUpdatePathId,
  CommentPublicUpdateData,
  CommentPublicUpdateStatus200,
  CommentPublicUpdateStatus400,
  CommentPublicUpdateStatus401,
  CommentPublicUpdateStatus403,
  CommentPublicUpdateStatus404,
  CommentPublicUpdateStatus500,
  CommentPublicUpdateStatus501,
} from "../../models/commentPublic/CommentPublicUpdate.ts";

function getCommentPublicUpdateUrl(id: CommentPublicUpdatePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-public/comments/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export async function commentPublicUpdate(
  id: CommentPublicUpdatePathId,
  data?: CommentPublicUpdateData,
  config: Partial<RequestConfig<CommentPublicUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    CommentPublicUpdateStatus200,
    ResponseErrorConfig<
      | CommentPublicUpdateStatus400
      | CommentPublicUpdateStatus401
      | CommentPublicUpdateStatus403
      | CommentPublicUpdateStatus404
      | CommentPublicUpdateStatus500
      | CommentPublicUpdateStatus501
    >,
    CommentPublicUpdateData
  >({
    method: "PUT",
    url: getCommentPublicUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
