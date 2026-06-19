/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RoleGetPathId,
  RoleGetStatus200,
  RoleGetStatus400,
  RoleGetStatus401,
  RoleGetStatus403,
  RoleGetStatus404,
  RoleGetStatus500,
  RoleGetStatus501,
} from "../../models/role/RoleGet.ts";

function getRoleGetUrl(id: RoleGetPathId) {
  const res = { method: "GET", url: `/api/identity/roles/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/roles/:id}
 */
export async function roleGet(
  id: RoleGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RoleGetStatus200,
    ResponseErrorConfig<
      | RoleGetStatus400
      | RoleGetStatus401
      | RoleGetStatus403
      | RoleGetStatus404
      | RoleGetStatus500
      | RoleGetStatus501
    >,
    unknown
  >({ method: "GET", url: getRoleGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
