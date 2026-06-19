/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsGetResourceQueryResourceName,
  PermissionsGetResourceQueryResourceKey,
  PermissionsGetResourceStatus200,
  PermissionsGetResourceStatus400,
  PermissionsGetResourceStatus401,
  PermissionsGetResourceStatus403,
  PermissionsGetResourceStatus404,
  PermissionsGetResourceStatus500,
  PermissionsGetResourceStatus501,
} from "../../models/permissions/PermissionsGetResource.ts";

function getPermissionsGetResourceUrl() {
  const res = { method: "GET", url: `/api/permission-management/permissions/resource` as const };

  return res;
}

/**
 * {@link /api/permission-management/permissions/resource}
 */
export async function permissionsGetResource(
  params?: {
    resourceName?: PermissionsGetResourceQueryResourceName;
    resourceKey?: PermissionsGetResourceQueryResourceKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsGetResourceStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceStatus400
      | PermissionsGetResourceStatus401
      | PermissionsGetResourceStatus403
      | PermissionsGetResourceStatus404
      | PermissionsGetResourceStatus500
      | PermissionsGetResourceStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPermissionsGetResourceUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
