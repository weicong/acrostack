/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { LoginLoginOptions, LoginLoginResponses } from "../../models/login/LoginLogin";
import { client } from "../../.kubb/client";

/**
 * {@link /api/account/login}
 */
export function loginLogin<ThrowOnError extends boolean = true>(
  options: Options<LoginLoginOptions, ThrowOnError>,
): Promise<RequestResult<LoginLoginResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/account/login",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<LoginLoginResponses, ThrowOnError>>;
}
