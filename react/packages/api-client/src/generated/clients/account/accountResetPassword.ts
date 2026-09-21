/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AccountResetPasswordOptions,
  AccountResetPasswordResponses,
} from "../../models/account/AccountResetPassword";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/reset-password}
 */
export function accountResetPassword<ThrowOnError extends boolean = true>(
  options: Options<AccountResetPasswordOptions, ThrowOnError>,
): Unwrappable<RequestResult<AccountResetPasswordResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/account/reset-password",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AccountResetPasswordResponses, ThrowOnError>>,
  );
}
