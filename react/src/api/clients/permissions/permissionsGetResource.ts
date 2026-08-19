/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetResourceOptions,
  PermissionsGetResourceResponses,
} from "../../models/permissions/PermissionsGetResource";
import { client } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function permissionsGetResource<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetResourceOptions, ThrowOnError> = {},
): Promise<RequestResult<PermissionsGetResourceResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/permission-management/permissions/resource",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PermissionsGetResourceResponses, ThrowOnError>>;
}
