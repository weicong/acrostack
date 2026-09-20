/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsUpdateResourceOptions,
  PermissionsUpdateResourceResponses,
} from "../../models/permissions/PermissionsUpdateResource";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function permissionsUpdateResource<ThrowOnError extends boolean = true>(
  options: Options<PermissionsUpdateResourceOptions, ThrowOnError>,
): Unwrappable<RequestResult<PermissionsUpdateResourceResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/permission-management/permissions/resource",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PermissionsUpdateResourceResponses, ThrowOnError>>,
  );
}
