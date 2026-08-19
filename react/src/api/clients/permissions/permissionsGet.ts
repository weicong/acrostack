/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetOptions,
  PermissionsGetResponses,
} from "../../models/permissions/PermissionsGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions}
 */
export function permissionsGet<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetOptions, ThrowOnError> = {},
): Promise<RequestResult<PermissionsGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/permission-management/permissions",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PermissionsGetResponses, ThrowOnError>>;
}
