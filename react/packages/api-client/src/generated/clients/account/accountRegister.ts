/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AccountRegisterOptions,
  AccountRegisterResponses,
} from "../../models/account/AccountRegister";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/register}
 */
export function accountRegister<ThrowOnError extends boolean = true>(
  options: Options<AccountRegisterOptions, ThrowOnError>,
): Unwrappable<RequestResult<AccountRegisterResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/account/register",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AccountRegisterResponses, ThrowOnError>>,
  );
}
