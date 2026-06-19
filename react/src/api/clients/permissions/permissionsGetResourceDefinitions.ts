/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsGetResourceDefinitionsQueryResourceName,
  PermissionsGetResourceDefinitionsStatus200,
  PermissionsGetResourceDefinitionsStatus400,
  PermissionsGetResourceDefinitionsStatus401,
  PermissionsGetResourceDefinitionsStatus403,
  PermissionsGetResourceDefinitionsStatus404,
  PermissionsGetResourceDefinitionsStatus500,
  PermissionsGetResourceDefinitionsStatus501,
} from "../../models/permissions/PermissionsGetResourceDefinitions.ts";

function getPermissionsGetResourceDefinitionsUrl() {
  const res = {
    method: "GET",
    url: `/api/permission-management/permissions/resource-definitions` as const,
  };

  return res;
}

/**
 * {@link /api/permission-management/permissions/resource-definitions}
 */
export async function permissionsGetResourceDefinitions(
  params?: { resourceName?: PermissionsGetResourceDefinitionsQueryResourceName },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsGetResourceDefinitionsStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceDefinitionsStatus400
      | PermissionsGetResourceDefinitionsStatus401
      | PermissionsGetResourceDefinitionsStatus403
      | PermissionsGetResourceDefinitionsStatus404
      | PermissionsGetResourceDefinitionsStatus500
      | PermissionsGetResourceDefinitionsStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPermissionsGetResourceDefinitionsUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
