/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AccountVerifyPasswordResetTokenOptions,
  AccountVerifyPasswordResetTokenResponses,
} from "../../models/account/AccountVerifyPasswordResetToken";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/verify-password-reset-token}
 */
export function accountVerifyPasswordResetToken<ThrowOnError extends boolean = true>(
  options: Options<AccountVerifyPasswordResetTokenOptions, ThrowOnError>,
): Unwrappable<RequestResult<AccountVerifyPasswordResetTokenResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/account/verify-password-reset-token",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AccountVerifyPasswordResetTokenResponses, ThrowOnError>>,
  );
}
