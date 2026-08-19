/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  EmailSettingsUpdateOptions,
  EmailSettingsUpdateResponses,
} from "../../models/emailSettings/EmailSettingsUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/setting-management/emailing}
 */
export function emailSettingsUpdate<ThrowOnError extends boolean = true>(
  options: Options<EmailSettingsUpdateOptions, ThrowOnError>,
): Promise<RequestResult<EmailSettingsUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/setting-management/emailing",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<EmailSettingsUpdateResponses, ThrowOnError>>;
}
