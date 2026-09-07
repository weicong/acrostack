/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  RoleGetAllListOptions,
  RoleGetAllListResponses,
} from "../../models/role/RoleGetAllList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/roles/all}
 */
export function roleGetAllList<ThrowOnError extends boolean = true>(
  options: Options<RoleGetAllListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<RoleGetAllListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/roles/all",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RoleGetAllListResponses, ThrowOnError>>,
  );
}
