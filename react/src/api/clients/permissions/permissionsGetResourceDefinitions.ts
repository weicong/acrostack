/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetResourceDefinitionsOptions,
  PermissionsGetResourceDefinitionsResponses,
} from "../../models/permissions/PermissionsGetResourceDefinitions";
import { client } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource-definitions}
 */
export function permissionsGetResourceDefinitions<ThrowOnError extends boolean = true>(
  options: Options<PermissionsGetResourceDefinitionsOptions, ThrowOnError> = {},
): Promise<RequestResult<PermissionsGetResourceDefinitionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/permission-management/permissions/resource-definitions",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PermissionsGetResourceDefinitionsResponses, ThrowOnError>>;
}
