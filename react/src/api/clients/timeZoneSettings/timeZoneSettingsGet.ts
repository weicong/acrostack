/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TimeZoneSettingsGetOptions,
  TimeZoneSettingsGetResponses,
} from "../../models/timeZoneSettings/TimeZoneSettingsGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/setting-management/timezone}
 */
export function timeZoneSettingsGet<ThrowOnError extends boolean = true>(
  options: Options<TimeZoneSettingsGetOptions, ThrowOnError> = {},
): Promise<RequestResult<TimeZoneSettingsGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/setting-management/timezone",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TimeZoneSettingsGetResponses, ThrowOnError>>;
}
