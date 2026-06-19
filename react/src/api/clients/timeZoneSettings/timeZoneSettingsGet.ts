/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TimeZoneSettingsGetStatus200,
  TimeZoneSettingsGetStatus400,
  TimeZoneSettingsGetStatus401,
  TimeZoneSettingsGetStatus403,
  TimeZoneSettingsGetStatus404,
  TimeZoneSettingsGetStatus500,
  TimeZoneSettingsGetStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsGet.ts";

function getTimeZoneSettingsGetUrl() {
  const res = { method: "GET", url: `/api/setting-management/timezone` as const };

  return res;
}

/**
 * {@link /api/setting-management/timezone}
 */
export async function timeZoneSettingsGet(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TimeZoneSettingsGetStatus200,
    ResponseErrorConfig<
      | TimeZoneSettingsGetStatus400
      | TimeZoneSettingsGetStatus401
      | TimeZoneSettingsGetStatus403
      | TimeZoneSettingsGetStatus404
      | TimeZoneSettingsGetStatus500
      | TimeZoneSettingsGetStatus501
    >,
    unknown
  >({ method: "GET", url: getTimeZoneSettingsGetUrl().url.toString(), ...requestConfig });

  return res.data;
}
