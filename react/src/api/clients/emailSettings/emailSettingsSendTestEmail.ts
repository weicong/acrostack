/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EmailSettingsSendTestEmailData,
  EmailSettingsSendTestEmailStatus200,
  EmailSettingsSendTestEmailStatus204,
  EmailSettingsSendTestEmailStatus400,
  EmailSettingsSendTestEmailStatus401,
  EmailSettingsSendTestEmailStatus403,
  EmailSettingsSendTestEmailStatus404,
  EmailSettingsSendTestEmailStatus500,
  EmailSettingsSendTestEmailStatus501,
} from "../../models/emailSettings/EmailSettingsSendTestEmail.ts";

function getEmailSettingsSendTestEmailUrl() {
  const res = { method: "POST", url: `/api/setting-management/emailing/send-test-email` as const };

  return res;
}

/**
 * {@link /api/setting-management/emailing/send-test-email}
 */
export async function emailSettingsSendTestEmail(
  data?: EmailSettingsSendTestEmailData,
  config: Partial<RequestConfig<EmailSettingsSendTestEmailData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    EmailSettingsSendTestEmailStatus200 | EmailSettingsSendTestEmailStatus204,
    ResponseErrorConfig<
      | EmailSettingsSendTestEmailStatus400
      | EmailSettingsSendTestEmailStatus401
      | EmailSettingsSendTestEmailStatus403
      | EmailSettingsSendTestEmailStatus404
      | EmailSettingsSendTestEmailStatus500
      | EmailSettingsSendTestEmailStatus501
    >,
    EmailSettingsSendTestEmailData
  >({
    method: "POST",
    url: getEmailSettingsSendTestEmailUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
