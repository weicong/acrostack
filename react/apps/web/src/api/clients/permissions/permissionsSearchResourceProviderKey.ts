/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsSearchResourceProviderKeyOptions,
  PermissionsSearchResourceProviderKeyResponses,
} from "../../models/permissions/PermissionsSearchResourceProviderKey";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/search-resource-provider-keys}
 */
export function permissionsSearchResourceProviderKey<ThrowOnError extends boolean = true>(
  options: Options<PermissionsSearchResourceProviderKeyOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PermissionsSearchResourceProviderKeyResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/permission-management/permissions/search-resource-provider-keys",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PermissionsSearchResourceProviderKeyResponses, ThrowOnError>>,
  );
}
