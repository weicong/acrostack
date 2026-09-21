/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TimeZoneSettingsGetOptions,
  TimeZoneSettingsGetResponses,
} from "../../models/timeZoneSettings/TimeZoneSettingsGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/setting-management/timezone}
 */
export function timeZoneSettingsGet<ThrowOnError extends boolean = true>(
  options: Options<TimeZoneSettingsGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<TimeZoneSettingsGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/setting-management/timezone",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TimeZoneSettingsGetResponses, ThrowOnError>>,
  );
}
