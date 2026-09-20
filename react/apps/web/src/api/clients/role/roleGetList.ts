/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { RoleGetListOptions, RoleGetListResponses } from "../../models/role/RoleGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/roles}
 */
export function roleGetList<ThrowOnError extends boolean = true>(
  options: Options<RoleGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<RoleGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/roles",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RoleGetListResponses, ThrowOnError>>,
  );
}
