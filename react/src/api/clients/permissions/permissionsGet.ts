/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetOptions,
  PermissionsGetResponses,
} from "../../models/permissions/PermissionsGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions}
 */
export function permissionsGet<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PermissionsGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/permission-management/permissions",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PermissionsGetResponses, ThrowOnError>>,
  );
}
