/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentPublicDeletePathId,
  CommentPublicDeleteStatus200,
  CommentPublicDeleteStatus204,
  CommentPublicDeleteStatus400,
  CommentPublicDeleteStatus401,
  CommentPublicDeleteStatus403,
  CommentPublicDeleteStatus404,
  CommentPublicDeleteStatus500,
  CommentPublicDeleteStatus501,
} from "../../models/commentPublic/CommentPublicDelete.ts";

function getCommentPublicDeleteUrl(id: CommentPublicDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-public/comments/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export async function commentPublicDelete(
  id: CommentPublicDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentPublicDeleteStatus200 | CommentPublicDeleteStatus204,
    ResponseErrorConfig<
      | CommentPublicDeleteStatus400
      | CommentPublicDeleteStatus401
      | CommentPublicDeleteStatus403
      | CommentPublicDeleteStatus404
      | CommentPublicDeleteStatus500
      | CommentPublicDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getCommentPublicDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
