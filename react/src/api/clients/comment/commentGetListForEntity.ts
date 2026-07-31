/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentGetListForEntityQueryEntityType,
  CommentGetListForEntityQueryEntityId,
  CommentGetListForEntityQuerySkipCount,
  CommentGetListForEntityQueryMaxResultCount,
  CommentGetListForEntityStatus200,
  CommentGetListForEntityStatus400,
  CommentGetListForEntityStatus401,
  CommentGetListForEntityStatus403,
  CommentGetListForEntityStatus404,
  CommentGetListForEntityStatus500,
  CommentGetListForEntityStatus501,
} from "../../models/comment/CommentGetListForEntity.ts";

function getCommentGetListForEntityUrl() {
  const res = { method: "GET", url: `/api/app/comment/for-entity` as const };

  return res;
}

/**
 * {@link /api/app/comment/for-entity}
 */
export async function commentGetListForEntity(
  params: {
    EntityType: CommentGetListForEntityQueryEntityType;
    EntityId: CommentGetListForEntityQueryEntityId;
    SkipCount?: CommentGetListForEntityQuerySkipCount;
    MaxResultCount?: CommentGetListForEntityQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentGetListForEntityStatus200,
    ResponseErrorConfig<
      | CommentGetListForEntityStatus400
      | CommentGetListForEntityStatus401
      | CommentGetListForEntityStatus403
      | CommentGetListForEntityStatus404
      | CommentGetListForEntityStatus500
      | CommentGetListForEntityStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getCommentGetListForEntityUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
