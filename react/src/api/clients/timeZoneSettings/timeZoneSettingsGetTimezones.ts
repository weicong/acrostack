/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TimeZoneSettingsGetTimezonesOptions,
  TimeZoneSettingsGetTimezonesResponses,
} from "../../models/timeZoneSettings/TimeZoneSettingsGetTimezones";
import { client } from "../../.kubb/client";

/**
 * {@link /api/setting-management/timezone/timezones}
 */
export function timeZoneSettingsGetTimezones<ThrowOnError extends boolean = true>(
  options: Options<TimeZoneSettingsGetTimezonesOptions, ThrowOnError> = {},
): Promise<RequestResult<TimeZoneSettingsGetTimezonesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/setting-management/timezone/timezones",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TimeZoneSettingsGetTimezonesResponses, ThrowOnError>>;
}
