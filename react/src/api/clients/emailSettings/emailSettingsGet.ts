/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  EmailSettingsGetOptions,
  EmailSettingsGetResponses,
} from "../../models/emailSettings/EmailSettingsGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/setting-management/emailing}
 */
export function emailSettingsGet<ThrowOnError extends boolean = true>(
  options: Options<EmailSettingsGetOptions, ThrowOnError> = {},
): Promise<RequestResult<EmailSettingsGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/setting-management/emailing",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<EmailSettingsGetResponses, ThrowOnError>>;
}
