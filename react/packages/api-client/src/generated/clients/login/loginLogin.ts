/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { LoginLoginOptions, LoginLoginResponses } from "../../models/login/LoginLogin";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/login}
 */
export function loginLogin<ThrowOnError extends boolean = true>(
  options: Options<LoginLoginOptions, ThrowOnError>,
): Unwrappable<RequestResult<LoginLoginResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/account/login",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<LoginLoginResponses, ThrowOnError>>,
  );
}
