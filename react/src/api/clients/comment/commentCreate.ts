/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentCreateData,
  CommentCreateStatus200,
  CommentCreateStatus400,
  CommentCreateStatus401,
  CommentCreateStatus403,
  CommentCreateStatus404,
  CommentCreateStatus500,
  CommentCreateStatus501,
} from "../../models/comment/CommentCreate.ts";

function getCommentCreateUrl() {
  const res = { method: "POST", url: `/api/app/comment` as const };

  return res;
}

/**
 * {@link /api/app/comment}
 */
export async function commentCreate(
  data?: CommentCreateData,
  config: Partial<RequestConfig<CommentCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    CommentCreateStatus200,
    ResponseErrorConfig<
      | CommentCreateStatus400
      | CommentCreateStatus401
      | CommentCreateStatus403
      | CommentCreateStatus404
      | CommentCreateStatus500
      | CommentCreateStatus501
    >,
    CommentCreateData
  >({
    method: "POST",
    url: getCommentCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
