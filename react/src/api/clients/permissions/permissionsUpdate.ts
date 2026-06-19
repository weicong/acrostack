/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsUpdateQueryProviderName,
  PermissionsUpdateQueryProviderKey,
  PermissionsUpdateData,
  PermissionsUpdateStatus200,
  PermissionsUpdateStatus204,
  PermissionsUpdateStatus400,
  PermissionsUpdateStatus401,
  PermissionsUpdateStatus403,
  PermissionsUpdateStatus404,
  PermissionsUpdateStatus500,
  PermissionsUpdateStatus501,
} from "../../models/permissions/PermissionsUpdate.ts";

function getPermissionsUpdateUrl() {
  const res = { method: "PUT", url: `/api/permission-management/permissions` as const };

  return res;
}

/**
 * {@link /api/permission-management/permissions}
 */
export async function permissionsUpdate(
  data?: PermissionsUpdateData,
  params?: {
    providerName?: PermissionsUpdateQueryProviderName;
    providerKey?: PermissionsUpdateQueryProviderKey;
  },
  config: Partial<RequestConfig<PermissionsUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PermissionsUpdateStatus200 | PermissionsUpdateStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateStatus400
      | PermissionsUpdateStatus401
      | PermissionsUpdateStatus403
      | PermissionsUpdateStatus404
      | PermissionsUpdateStatus500
      | PermissionsUpdateStatus501
    >,
    PermissionsUpdateData
  >({
    method: "PUT",
    url: getPermissionsUpdateUrl().url.toString(),
    params,
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
