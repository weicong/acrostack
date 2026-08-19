/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PermissionsGetResourceProviderKeyLookupServicesOptions,
  PermissionsGetResourceProviderKeyLookupServicesResponses,
} from "../../models/permissions/PermissionsGetResourceProviderKeyLookupServices";
import { client } from "../../.kubb/client";

/**
 * {@link /api/permission-management/permissions/resource-provider-key-lookup-services}
 */
export function permissionsGetResourceProviderKeyLookupServices<
  ThrowOnError extends boolean = true,
>(
  options: Options<PermissionsGetResourceProviderKeyLookupServicesOptions, ThrowOnError> = {},
): Promise<RequestResult<PermissionsGetResourceProviderKeyLookupServicesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/permission-management/permissions/resource-provider-key-lookup-services",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<
    RequestResult<PermissionsGetResourceProviderKeyLookupServicesResponses, ThrowOnError>
  >;
}
