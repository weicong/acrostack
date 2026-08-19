/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  EmailSettingsSendTestEmailOptions,
  EmailSettingsSendTestEmailResponses,
} from "../../models/emailSettings/EmailSettingsSendTestEmail";
import { client } from "../../.kubb/client";

/**
 * {@link /api/setting-management/emailing/send-test-email}
 */
export function emailSettingsSendTestEmail<ThrowOnError extends boolean = true>(
  options: Options<EmailSettingsSendTestEmailOptions, ThrowOnError>,
): Promise<RequestResult<EmailSettingsSendTestEmailResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/setting-management/emailing/send-test-email",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<EmailSettingsSendTestEmailResponses, ThrowOnError>>;
}
