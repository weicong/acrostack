/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsGetByGroupQueryGroupName,
  PermissionsGetByGroupQueryProviderName,
  PermissionsGetByGroupQueryProviderKey,
  PermissionsGetByGroupStatus200,
  PermissionsGetByGroupStatus400,
  PermissionsGetByGroupStatus401,
  PermissionsGetByGroupStatus403,
  PermissionsGetByGroupStatus404,
  PermissionsGetByGroupStatus500,
  PermissionsGetByGroupStatus501,
} from "../../models/permissions/PermissionsGetByGroup.ts";

function getPermissionsGetByGroupUrl() {
  const res = { method: "GET", url: `/api/permission-management/permissions/by-group` as const };

  return res;
}

/**
 * {@link /api/permission-management/permissions/by-group}
 */
export async function permissionsGetByGroup(
  params?: {
    groupName?: PermissionsGetByGroupQueryGroupName;
    providerName?: PermissionsGetByGroupQueryProviderName;
    providerKey?: PermissionsGetByGroupQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsGetByGroupStatus200,
    ResponseErrorConfig<
      | PermissionsGetByGroupStatus400
      | PermissionsGetByGroupStatus401
      | PermissionsGetByGroupStatus403
      | PermissionsGetByGroupStatus404
      | PermissionsGetByGroupStatus500
      | PermissionsGetByGroupStatus501
    >,
    unknown
  >({ method: "GET", url: getPermissionsGetByGroupUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
