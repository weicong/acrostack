/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PermissionsUpdateResourceQueryResourceName,
  PermissionsUpdateResourceQueryResourceKey,
  PermissionsUpdateResourceData,
  PermissionsUpdateResourceStatus200,
  PermissionsUpdateResourceStatus204,
  PermissionsUpdateResourceStatus400,
  PermissionsUpdateResourceStatus401,
  PermissionsUpdateResourceStatus403,
  PermissionsUpdateResourceStatus404,
  PermissionsUpdateResourceStatus500,
  PermissionsUpdateResourceStatus501,
} from "../../models/permissions/PermissionsUpdateResource.ts";

function getPermissionsUpdateResourceUrl() {
  const res = { method: "PUT", url: `/api/permission-management/permissions/resource` as const };

  return res;
}

/**
 * {@link /api/permission-management/permissions/resource}
 */
export async function permissionsUpdateResource(
  data?: PermissionsUpdateResourceData,
  params?: {
    resourceName?: PermissionsUpdateResourceQueryResourceName;
    resourceKey?: PermissionsUpdateResourceQueryResourceKey;
  },
  config: Partial<RequestConfig<PermissionsUpdateResourceData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PermissionsUpdateResourceStatus200 | PermissionsUpdateResourceStatus204,
    ResponseErrorConfig<
      | PermissionsUpdateResourceStatus400
      | PermissionsUpdateResourceStatus401
      | PermissionsUpdateResourceStatus403
      | PermissionsUpdateResourceStatus404
      | PermissionsUpdateResourceStatus500
      | PermissionsUpdateResourceStatus501
    >,
    PermissionsUpdateResourceData
  >({
    method: "PUT",
    url: getPermissionsUpdateResourceUrl().url.toString(),
    params,
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
