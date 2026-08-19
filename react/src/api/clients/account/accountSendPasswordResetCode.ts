/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  AccountSendPasswordResetCodeOptions,
  AccountSendPasswordResetCodeResponses,
} from "../../models/account/AccountSendPasswordResetCode";
import { client } from "../../.kubb/client";

/**
 * {@link /api/account/send-password-reset-code}
 */
export function accountSendPasswordResetCode<ThrowOnError extends boolean = true>(
  options: Options<AccountSendPasswordResetCodeOptions, ThrowOnError>,
): Promise<RequestResult<AccountSendPasswordResetCodeResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/account/send-password-reset-code",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<AccountSendPasswordResetCodeResponses, ThrowOnError>>;
}
