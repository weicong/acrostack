/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentDeletePathId,
  CommentDeleteStatus200,
  CommentDeleteStatus204,
  CommentDeleteStatus400,
  CommentDeleteStatus401,
  CommentDeleteStatus403,
  CommentDeleteStatus404,
  CommentDeleteStatus500,
  CommentDeleteStatus501,
} from "../../models/comment/CommentDelete.ts";

function getCommentDeleteUrl(id: CommentDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/comment/${id}` as const };

  return res;
}

/**
 * {@link /api/app/comment/:id}
 */
export async function commentDelete(
  id: CommentDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentDeleteStatus200 | CommentDeleteStatus204,
    ResponseErrorConfig<
      | CommentDeleteStatus400
      | CommentDeleteStatus401
      | CommentDeleteStatus403
      | CommentDeleteStatus404
      | CommentDeleteStatus500
      | CommentDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getCommentDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
