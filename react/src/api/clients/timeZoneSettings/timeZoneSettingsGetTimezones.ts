/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TimeZoneSettingsGetTimezonesOptions,
  TimeZoneSettingsGetTimezonesResponses,
} from "../../models/timeZoneSettings/TimeZoneSettingsGetTimezones";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/setting-management/timezone/timezones}
 */
export function timeZoneSettingsGetTimezones<ThrowOnError extends boolean = true>(
  options: Options<TimeZoneSettingsGetTimezonesOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<TimeZoneSettingsGetTimezonesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/setting-management/timezone/timezones",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TimeZoneSettingsGetTimezonesResponses, ThrowOnError>>,
  );
}
