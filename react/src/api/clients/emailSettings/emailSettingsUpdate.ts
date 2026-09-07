/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  EmailSettingsUpdateOptions,
  EmailSettingsUpdateResponses,
} from "../../models/emailSettings/EmailSettingsUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/setting-management/emailing}
 */
export function emailSettingsUpdate<ThrowOnError extends boolean = true>(
  options: Options<EmailSettingsUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<EmailSettingsUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/setting-management/emailing",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<EmailSettingsUpdateResponses, ThrowOnError>>,
  );
}
