/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentAdminGetPathId,
  CommentAdminGetStatus200,
  CommentAdminGetStatus400,
  CommentAdminGetStatus401,
  CommentAdminGetStatus403,
  CommentAdminGetStatus404,
  CommentAdminGetStatus500,
  CommentAdminGetStatus501,
} from "../../models/commentAdmin/CommentAdminGet.ts";

function getCommentAdminGetUrl(id: CommentAdminGetPathId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/comments/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export async function commentAdminGet(
  id: CommentAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentAdminGetStatus200,
    ResponseErrorConfig<
      | CommentAdminGetStatus400
      | CommentAdminGetStatus401
      | CommentAdminGetStatus403
      | CommentAdminGetStatus404
      | CommentAdminGetStatus500
      | CommentAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getCommentAdminGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
