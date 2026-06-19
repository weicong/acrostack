/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EmailSettingsGetStatus200,
  EmailSettingsGetStatus400,
  EmailSettingsGetStatus401,
  EmailSettingsGetStatus403,
  EmailSettingsGetStatus404,
  EmailSettingsGetStatus500,
  EmailSettingsGetStatus501,
} from "../../models/emailSettings/EmailSettingsGet.ts";

function getEmailSettingsGetUrl() {
  const res = { method: "GET", url: `/api/setting-management/emailing` as const };

  return res;
}

/**
 * {@link /api/setting-management/emailing}
 */
export async function emailSettingsGet(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    EmailSettingsGetStatus200,
    ResponseErrorConfig<
      | EmailSettingsGetStatus400
      | EmailSettingsGetStatus401
      | EmailSettingsGetStatus403
      | EmailSettingsGetStatus404
      | EmailSettingsGetStatus500
      | EmailSettingsGetStatus501
    >,
    unknown
  >({ method: "GET", url: getEmailSettingsGetUrl().url.toString(), ...requestConfig });

  return res.data;
}
