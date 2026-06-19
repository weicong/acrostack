/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EmailSettingsUpdateData,
  EmailSettingsUpdateStatus200,
  EmailSettingsUpdateStatus204,
  EmailSettingsUpdateStatus400,
  EmailSettingsUpdateStatus401,
  EmailSettingsUpdateStatus403,
  EmailSettingsUpdateStatus404,
  EmailSettingsUpdateStatus500,
  EmailSettingsUpdateStatus501,
} from "../../models/emailSettings/EmailSettingsUpdate.ts";

function getEmailSettingsUpdateUrl() {
  const res = { method: "POST", url: `/api/setting-management/emailing` as const };

  return res;
}

/**
 * {@link /api/setting-management/emailing}
 */
export async function emailSettingsUpdate(
  data?: EmailSettingsUpdateData,
  config: Partial<RequestConfig<EmailSettingsUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    EmailSettingsUpdateStatus200 | EmailSettingsUpdateStatus204,
    ResponseErrorConfig<
      | EmailSettingsUpdateStatus400
      | EmailSettingsUpdateStatus401
      | EmailSettingsUpdateStatus403
      | EmailSettingsUpdateStatus404
      | EmailSettingsUpdateStatus500
      | EmailSettingsUpdateStatus501
    >,
    EmailSettingsUpdateData
  >({
    method: "POST",
    url: getEmailSettingsUpdateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
