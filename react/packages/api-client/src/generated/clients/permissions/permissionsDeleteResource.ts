/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsDeleteResourceOptions,
  PermissionsDeleteResourceResponses,
} from "../../models/permissions/PermissionsDeleteResource";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function permissionsDeleteResource<ThrowOnError extends boolean = true>(
  options: Options<PermissionsDeleteResourceOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PermissionsDeleteResourceResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/permission-management/permissions/resource",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PermissionsDeleteResourceResponses, ThrowOnError>>,
  );
}
