/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentPublicGetListPathEntityType,
  CommentPublicGetListPathEntityId,
  CommentPublicGetListStatus200,
  CommentPublicGetListStatus400,
  CommentPublicGetListStatus401,
  CommentPublicGetListStatus403,
  CommentPublicGetListStatus404,
  CommentPublicGetListStatus500,
  CommentPublicGetListStatus501,
} from "../../models/commentPublic/CommentPublicGetList.ts";

function getCommentPublicGetListUrl(
  entityType: CommentPublicGetListPathEntityType,
  entityId: CommentPublicGetListPathEntityId,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit-public/comments/${entityType}/${entityId}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export async function commentPublicGetList(
  entityType: CommentPublicGetListPathEntityType,
  entityId: CommentPublicGetListPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentPublicGetListStatus200,
    ResponseErrorConfig<
      | CommentPublicGetListStatus400
      | CommentPublicGetListStatus401
      | CommentPublicGetListStatus403
      | CommentPublicGetListStatus404
      | CommentPublicGetListStatus500
      | CommentPublicGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getCommentPublicGetListUrl(entityType, entityId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
