/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsSearchResourceProviderKeyQueryResourceName,
  PermissionsSearchResourceProviderKeyQueryServiceName,
  PermissionsSearchResourceProviderKeyQueryFilter,
  PermissionsSearchResourceProviderKeyQueryPage,
  PermissionsSearchResourceProviderKeyStatus200,
  PermissionsSearchResourceProviderKeyStatus400,
  PermissionsSearchResourceProviderKeyStatus401,
  PermissionsSearchResourceProviderKeyStatus403,
  PermissionsSearchResourceProviderKeyStatus404,
  PermissionsSearchResourceProviderKeyStatus500,
  PermissionsSearchResourceProviderKeyStatus501,
} from "../../models/permissions/PermissionsSearchResourceProviderKey.ts";

function getPermissionsSearchResourceProviderKeyUrl() {
  const res = {
    method: "GET",
    url: `/api/permission-management/permissions/search-resource-provider-keys` as const,
  };

  return res;
}

/**
 * {@link /api/permission-management/permissions/search-resource-provider-keys}
 */
export async function permissionsSearchResourceProviderKey(
  params?: {
    resourceName?: PermissionsSearchResourceProviderKeyQueryResourceName;
    serviceName?: PermissionsSearchResourceProviderKeyQueryServiceName;
    filter?: PermissionsSearchResourceProviderKeyQueryFilter;
    page?: PermissionsSearchResourceProviderKeyQueryPage;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsSearchResourceProviderKeyStatus200,
    ResponseErrorConfig<
      | PermissionsSearchResourceProviderKeyStatus400
      | PermissionsSearchResourceProviderKeyStatus401
      | PermissionsSearchResourceProviderKeyStatus403
      | PermissionsSearchResourceProviderKeyStatus404
      | PermissionsSearchResourceProviderKeyStatus500
      | PermissionsSearchResourceProviderKeyStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPermissionsSearchResourceProviderKeyUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
