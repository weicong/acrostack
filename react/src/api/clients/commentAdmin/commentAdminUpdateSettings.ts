/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  CommentAdminUpdateSettingsData,
  CommentAdminUpdateSettingsStatus200,
  CommentAdminUpdateSettingsStatus204,
  CommentAdminUpdateSettingsStatus400,
  CommentAdminUpdateSettingsStatus401,
  CommentAdminUpdateSettingsStatus403,
  CommentAdminUpdateSettingsStatus404,
  CommentAdminUpdateSettingsStatus500,
  CommentAdminUpdateSettingsStatus501,
} from "../../models/commentAdmin/CommentAdminUpdateSettings.ts";

function getCommentAdminUpdateSettingsUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/comments/settings` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/comments/settings}
 */
export async function commentAdminUpdateSettings(
  data?: CommentAdminUpdateSettingsData,
  config: Partial<RequestConfig<CommentAdminUpdateSettingsData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    CommentAdminUpdateSettingsStatus200 | CommentAdminUpdateSettingsStatus204,
    ResponseErrorConfig<
      | CommentAdminUpdateSettingsStatus400
      | CommentAdminUpdateSettingsStatus401
      | CommentAdminUpdateSettingsStatus403
      | CommentAdminUpdateSettingsStatus404
      | CommentAdminUpdateSettingsStatus500
      | CommentAdminUpdateSettingsStatus501
    >,
    CommentAdminUpdateSettingsData
  >({
    method: "POST",
    url: getCommentAdminUpdateSettingsUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
