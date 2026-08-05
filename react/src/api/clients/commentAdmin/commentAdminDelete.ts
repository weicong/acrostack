/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentAdminDeletePathId,
  CommentAdminDeleteStatus200,
  CommentAdminDeleteStatus204,
  CommentAdminDeleteStatus400,
  CommentAdminDeleteStatus401,
  CommentAdminDeleteStatus403,
  CommentAdminDeleteStatus404,
  CommentAdminDeleteStatus500,
  CommentAdminDeleteStatus501,
} from "../../models/commentAdmin/CommentAdminDelete.ts";

function getCommentAdminDeleteUrl(id: CommentAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/comments/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export async function commentAdminDelete(
  id: CommentAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentAdminDeleteStatus200 | CommentAdminDeleteStatus204,
    ResponseErrorConfig<
      | CommentAdminDeleteStatus400
      | CommentAdminDeleteStatus401
      | CommentAdminDeleteStatus403
      | CommentAdminDeleteStatus404
      | CommentAdminDeleteStatus500
      | CommentAdminDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getCommentAdminDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
