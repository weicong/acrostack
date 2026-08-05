/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentPublicCreatePathEntityType,
  CommentPublicCreatePathEntityId,
  CommentPublicCreateData,
  CommentPublicCreateStatus200,
  CommentPublicCreateStatus400,
  CommentPublicCreateStatus401,
  CommentPublicCreateStatus403,
  CommentPublicCreateStatus404,
  CommentPublicCreateStatus500,
  CommentPublicCreateStatus501,
} from "../../models/commentPublic/CommentPublicCreate.ts";

function getCommentPublicCreateUrl(
  entityType: CommentPublicCreatePathEntityType,
  entityId: CommentPublicCreatePathEntityId,
) {
  const res = {
    method: "POST",
    url: `/api/cms-kit-public/comments/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export async function commentPublicCreate(
  entityType: CommentPublicCreatePathEntityType,
  entityId: CommentPublicCreatePathEntityId,
  data?: CommentPublicCreateData,
  config: Partial<RequestConfig<CommentPublicCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    CommentPublicCreateStatus200,
    ResponseErrorConfig<
      | CommentPublicCreateStatus400
      | CommentPublicCreateStatus401
      | CommentPublicCreateStatus403
      | CommentPublicCreateStatus404
      | CommentPublicCreateStatus500
      | CommentPublicCreateStatus501
    >,
    CommentPublicCreateData
  >({
    method: "POST",
    url: getCommentPublicCreateUrl(entityType, entityId).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
