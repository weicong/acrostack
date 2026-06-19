/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RoleCreateData,
  RoleCreateStatus200,
  RoleCreateStatus400,
  RoleCreateStatus401,
  RoleCreateStatus403,
  RoleCreateStatus404,
  RoleCreateStatus500,
  RoleCreateStatus501,
} from "../../models/role/RoleCreate.ts";

function getRoleCreateUrl() {
  const res = { method: "POST", url: `/api/identity/roles` as const };

  return res;
}

/**
 * {@link /api/identity/roles}
 */
export async function roleCreate(
  data?: RoleCreateData,
  config: Partial<RequestConfig<RoleCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    RoleCreateStatus200,
    ResponseErrorConfig<
      | RoleCreateStatus400
      | RoleCreateStatus401
      | RoleCreateStatus403
      | RoleCreateStatus404
      | RoleCreateStatus500
      | RoleCreateStatus501
    >,
    RoleCreateData
  >({
    method: "POST",
    url: getRoleCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
