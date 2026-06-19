/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsDeleteResourceQueryResourceName,
  PermissionsDeleteResourceQueryResourceKey,
  PermissionsDeleteResourceQueryProviderName,
  PermissionsDeleteResourceQueryProviderKey,
  PermissionsDeleteResourceStatus200,
  PermissionsDeleteResourceStatus204,
  PermissionsDeleteResourceStatus400,
  PermissionsDeleteResourceStatus401,
  PermissionsDeleteResourceStatus403,
  PermissionsDeleteResourceStatus404,
  PermissionsDeleteResourceStatus500,
  PermissionsDeleteResourceStatus501,
} from "../../models/permissions/PermissionsDeleteResource.ts";

function getPermissionsDeleteResourceUrl() {
  const res = { method: "DELETE", url: `/api/permission-management/permissions/resource` as const };

  return res;
}

/**
 * {@link /api/permission-management/permissions/resource}
 */
export async function permissionsDeleteResource(
  params?: {
    resourceName?: PermissionsDeleteResourceQueryResourceName;
    resourceKey?: PermissionsDeleteResourceQueryResourceKey;
    providerName?: PermissionsDeleteResourceQueryProviderName;
    providerKey?: PermissionsDeleteResourceQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsDeleteResourceStatus200 | PermissionsDeleteResourceStatus204,
    ResponseErrorConfig<
      | PermissionsDeleteResourceStatus400
      | PermissionsDeleteResourceStatus401
      | PermissionsDeleteResourceStatus403
      | PermissionsDeleteResourceStatus404
      | PermissionsDeleteResourceStatus500
      | PermissionsDeleteResourceStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getPermissionsDeleteResourceUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
