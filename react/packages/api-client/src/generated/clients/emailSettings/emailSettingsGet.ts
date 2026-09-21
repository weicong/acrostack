/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  EmailSettingsGetOptions,
  EmailSettingsGetResponses,
} from "../../models/emailSettings/EmailSettingsGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/setting-management/emailing}
 */
export function emailSettingsGet<ThrowOnError extends boolean = true>(
  options: Options<EmailSettingsGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<EmailSettingsGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/setting-management/emailing",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<EmailSettingsGetResponses, ThrowOnError>>,
  );
}
