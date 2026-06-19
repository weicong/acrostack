/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsGetQueryProviderName,
  PermissionsGetQueryProviderKey,
  PermissionsGetStatus200,
  PermissionsGetStatus400,
  PermissionsGetStatus401,
  PermissionsGetStatus403,
  PermissionsGetStatus404,
  PermissionsGetStatus500,
  PermissionsGetStatus501,
} from "../../models/permissions/PermissionsGet.ts";

function getPermissionsGetUrl() {
  const res = { method: "GET", url: `/api/permission-management/permissions` as const };

  return res;
}

/**
 * {@link /api/permission-management/permissions}
 */
export async function permissionsGet(
  params?: {
    providerName?: PermissionsGetQueryProviderName;
    providerKey?: PermissionsGetQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PermissionsGetStatus200,
    ResponseErrorConfig<
      | PermissionsGetStatus400
      | PermissionsGetStatus401
      | PermissionsGetStatus403
      | PermissionsGetStatus404
      | PermissionsGetStatus500
      | PermissionsGetStatus501
    >,
    unknown
  >({ method: "GET", url: getPermissionsGetUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
