/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentAdminGetWaitingCountStatus200,
  CommentAdminGetWaitingCountStatus400,
  CommentAdminGetWaitingCountStatus401,
  CommentAdminGetWaitingCountStatus403,
  CommentAdminGetWaitingCountStatus404,
  CommentAdminGetWaitingCountStatus500,
  CommentAdminGetWaitingCountStatus501,
} from "../../models/commentAdmin/CommentAdminGetWaitingCount.ts";

function getCommentAdminGetWaitingCountUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/comments/waiting-count` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/comments/waiting-count}
 */
export async function commentAdminGetWaitingCount(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CommentAdminGetWaitingCountStatus200,
    ResponseErrorConfig<
      | CommentAdminGetWaitingCountStatus400
      | CommentAdminGetWaitingCountStatus401
      | CommentAdminGetWaitingCountStatus403
      | CommentAdminGetWaitingCountStatus404
      | CommentAdminGetWaitingCountStatus500
      | CommentAdminGetWaitingCountStatus501
    >,
    unknown
  >({ method: "GET", url: getCommentAdminGetWaitingCountUrl().url.toString(), ...requestConfig });

  return res.data;
}
