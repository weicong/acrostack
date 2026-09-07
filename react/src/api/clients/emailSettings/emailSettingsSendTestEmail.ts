/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  EmailSettingsSendTestEmailOptions,
  EmailSettingsSendTestEmailResponses,
} from "../../models/emailSettings/EmailSettingsSendTestEmail";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/setting-management/emailing/send-test-email}
 */
export function emailSettingsSendTestEmail<ThrowOnError extends boolean = true>(
  options: Options<EmailSettingsSendTestEmailOptions, ThrowOnError>,
): Unwrappable<RequestResult<EmailSettingsSendTestEmailResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/setting-management/emailing/send-test-email",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<EmailSettingsSendTestEmailResponses, ThrowOnError>>,
  );
}
