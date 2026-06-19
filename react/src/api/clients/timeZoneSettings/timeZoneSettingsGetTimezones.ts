/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TimeZoneSettingsGetTimezonesStatus200,
  TimeZoneSettingsGetTimezonesStatus400,
  TimeZoneSettingsGetTimezonesStatus401,
  TimeZoneSettingsGetTimezonesStatus403,
  TimeZoneSettingsGetTimezonesStatus404,
  TimeZoneSettingsGetTimezonesStatus500,
  TimeZoneSettingsGetTimezonesStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsGetTimezones.ts";

function getTimeZoneSettingsGetTimezonesUrl() {
  const res = { method: "GET", url: `/api/setting-management/timezone/timezones` as const };

  return res;
}

/**
 * {@link /api/setting-management/timezone/timezones}
 */
export async function timeZoneSettingsGetTimezones(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TimeZoneSettingsGetTimezonesStatus200,
    ResponseErrorConfig<
      | TimeZoneSettingsGetTimezonesStatus400
      | TimeZoneSettingsGetTimezonesStatus401
      | TimeZoneSettingsGetTimezonesStatus403
      | TimeZoneSettingsGetTimezonesStatus404
      | TimeZoneSettingsGetTimezonesStatus500
      | TimeZoneSettingsGetTimezonesStatus501
    >,
    unknown
  >({ method: "GET", url: getTimeZoneSettingsGetTimezonesUrl().url.toString(), ...requestConfig });

  return res.data;
}
