/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  DynamicClaimsRefreshOptions,
  DynamicClaimsRefreshResponses,
} from "../../models/dynamicClaims/DynamicClaimsRefresh";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/dynamic-claims/refresh}
 */
export function dynamicClaimsRefresh<ThrowOnError extends boolean = true>(
  options: Options<DynamicClaimsRefreshOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<DynamicClaimsRefreshResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/account/dynamic-claims/refresh",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<DynamicClaimsRefreshResponses, ThrowOnError>>,
  );
}
