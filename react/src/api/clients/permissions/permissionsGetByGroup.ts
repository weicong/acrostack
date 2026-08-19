/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetByGroupOptions,
  PermissionsGetByGroupResponses,
} from "../../models/permissions/PermissionsGetByGroup";
import { client } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/by-group}
 */
export function permissionsGetByGroup<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetByGroupOptions, ThrowOnError> = {},
): Promise<RequestResult<PermissionsGetByGroupResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/permission-management/permissions/by-group",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PermissionsGetByGroupResponses, ThrowOnError>>;
}
