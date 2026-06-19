/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsGetResourceProviderKeyLookupServicesQueryResourceName,
  PermissionsGetResourceProviderKeyLookupServicesStatus200,
  PermissionsGetResourceProviderKeyLookupServicesStatus400,
  PermissionsGetResourceProviderKeyLookupServicesStatus401,
  PermissionsGetResourceProviderKeyLookupServicesStatus403,
  PermissionsGetResourceProviderKeyLookupServicesStatus404,
  PermissionsGetResourceProviderKeyLookupServicesStatus500,
  PermissionsGetResourceProviderKeyLookupServicesStatus501,
} from "../../models/permissions/PermissionsGetResourceProviderKeyLookupServices.ts";

function getPermissionsGetResourceProviderKeyLookupServicesUrl() {
  const res = {
    method: "GET",
    url: `/api/permission-management/permissions/resource-provider-key-lookup-services` as const,
  };

  return res;
}

/**
 * {@link /api/permission-management/permissions/resource-provider-key-lookup-services}
 */
export async function permissionsGetResourceProviderKeyLookupServices(
  params?: { resourceName?: PermissionsGetResourceProviderKeyLookupServicesQueryResourceName },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsGetResourceProviderKeyLookupServicesStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceProviderKeyLookupServicesStatus400
      | PermissionsGetResourceProviderKeyLookupServicesStatus401
      | PermissionsGetResourceProviderKeyLookupServicesStatus403
      | PermissionsGetResourceProviderKeyLookupServicesStatus404
      | PermissionsGetResourceProviderKeyLookupServicesStatus500
      | PermissionsGetResourceProviderKeyLookupServicesStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPermissionsGetResourceProviderKeyLookupServicesUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
