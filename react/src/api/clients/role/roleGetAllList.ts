/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RoleGetAllListStatus200,
  RoleGetAllListStatus400,
  RoleGetAllListStatus401,
  RoleGetAllListStatus403,
  RoleGetAllListStatus404,
  RoleGetAllListStatus500,
  RoleGetAllListStatus501,
} from "../../models/role/RoleGetAllList.ts";

function getRoleGetAllListUrl() {
  const res = { method: "GET", url: `/api/identity/roles/all` as const };

  return res;
}

/**
 * {@link /api/identity/roles/all}
 */
export async function roleGetAllList(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RoleGetAllListStatus200,
    ResponseErrorConfig<
      | RoleGetAllListStatus400
      | RoleGetAllListStatus401
      | RoleGetAllListStatus403
      | RoleGetAllListStatus404
      | RoleGetAllListStatus500
      | RoleGetAllListStatus501
    >,
    unknown
  >({ method: "GET", url: getRoleGetAllListUrl().url.toString(), ...requestConfig });

  return res.data;
}
