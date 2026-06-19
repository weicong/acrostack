/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TimeZoneSettingsUpdateQueryTimezone,
  TimeZoneSettingsUpdateStatus200,
  TimeZoneSettingsUpdateStatus204,
  TimeZoneSettingsUpdateStatus400,
  TimeZoneSettingsUpdateStatus401,
  TimeZoneSettingsUpdateStatus403,
  TimeZoneSettingsUpdateStatus404,
  TimeZoneSettingsUpdateStatus500,
  TimeZoneSettingsUpdateStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsUpdate.ts";

function getTimeZoneSettingsUpdateUrl() {
  const res = { method: "POST", url: `/api/setting-management/timezone` as const };

  return res;
}

/**
 * {@link /api/setting-management/timezone}
 */
export async function timeZoneSettingsUpdate(
  params?: { timezone?: TimeZoneSettingsUpdateQueryTimezone },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TimeZoneSettingsUpdateStatus200 | TimeZoneSettingsUpdateStatus204,
    ResponseErrorConfig<
      | TimeZoneSettingsUpdateStatus400
      | TimeZoneSettingsUpdateStatus401
      | TimeZoneSettingsUpdateStatus403
      | TimeZoneSettingsUpdateStatus404
      | TimeZoneSettingsUpdateStatus500
      | TimeZoneSettingsUpdateStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getTimeZoneSettingsUpdateUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
