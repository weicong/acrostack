/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetByGroupOptions,
  PermissionsGetByGroupResponses,
} from "../../models/permissions/PermissionsGetByGroup";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/by-group}
 */
export function permissionsGetByGroup<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetByGroupOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PermissionsGetByGroupResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/permission-management/permissions/by-group",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PermissionsGetByGroupResponses, ThrowOnError>>,
  );
}
