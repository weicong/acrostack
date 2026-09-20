/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AccountSendPasswordResetCodeOptions,
  AccountSendPasswordResetCodeResponses,
} from "../../models/account/AccountSendPasswordResetCode";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/send-password-reset-code}
 */
export function accountSendPasswordResetCode<ThrowOnError extends boolean = true>(
  options: Options<AccountSendPasswordResetCodeOptions, ThrowOnError>,
): Unwrappable<RequestResult<AccountSendPasswordResetCodeResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/account/send-password-reset-code",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AccountSendPasswordResetCodeResponses, ThrowOnError>>,
  );
}
