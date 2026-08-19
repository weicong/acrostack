/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { RoleGetListOptions, RoleGetListResponses } from "../../models/role/RoleGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/roles}
 */
export function roleGetList<ThrowOnError extends boolean = true>(
  options: Options<RoleGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<RoleGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/identity/roles",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<RoleGetListResponses, ThrowOnError>>;
}
