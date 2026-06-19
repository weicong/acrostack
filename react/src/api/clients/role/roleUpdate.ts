/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RoleUpdatePathId,
  RoleUpdateData,
  RoleUpdateStatus200,
  RoleUpdateStatus400,
  RoleUpdateStatus401,
  RoleUpdateStatus403,
  RoleUpdateStatus404,
  RoleUpdateStatus500,
  RoleUpdateStatus501,
} from "../../models/role/RoleUpdate.ts";

function getRoleUpdateUrl(id: RoleUpdatePathId) {
  const res = { method: "PUT", url: `/api/identity/roles/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/roles/:id}
 */
export async function roleUpdate(
  id: RoleUpdatePathId,
  data?: RoleUpdateData,
  config: Partial<RequestConfig<RoleUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    RoleUpdateStatus200,
    ResponseErrorConfig<
      | RoleUpdateStatus400
      | RoleUpdateStatus401
      | RoleUpdateStatus403
      | RoleUpdateStatus404
      | RoleUpdateStatus500
      | RoleUpdateStatus501
    >,
    RoleUpdateData
  >({
    method: "PUT",
    url: getRoleUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
