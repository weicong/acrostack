/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetResourceProviderKeyLookupServicesOptions,
  PermissionsGetResourceProviderKeyLookupServicesResponses,
} from "../../models/permissions/PermissionsGetResourceProviderKeyLookupServices";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource-provider-key-lookup-services}
 */
export function permissionsGetResourceProviderKeyLookupServices<
  ThrowOnError extends boolean = true,
>(
  options: Options<PermissionsGetResourceProviderKeyLookupServicesOptions, ThrowOnError> = {},
): Unwrappable<
  RequestResult<PermissionsGetResourceProviderKeyLookupServicesResponses, ThrowOnError>
> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/permission-management/permissions/resource-provider-key-lookup-services",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<
      RequestResult<PermissionsGetResourceProviderKeyLookupServicesResponses, ThrowOnError>
    >,
  );
}
