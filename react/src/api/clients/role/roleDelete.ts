/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RoleDeletePathId,
  RoleDeleteStatus200,
  RoleDeleteStatus204,
  RoleDeleteStatus400,
  RoleDeleteStatus401,
  RoleDeleteStatus403,
  RoleDeleteStatus404,
  RoleDeleteStatus500,
  RoleDeleteStatus501,
} from "../../models/role/RoleDelete.ts";

function getRoleDeleteUrl(id: RoleDeletePathId) {
  const res = { method: "DELETE", url: `/api/identity/roles/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/roles/:id}
 */
export async function roleDelete(
  id: RoleDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RoleDeleteStatus200 | RoleDeleteStatus204,
    ResponseErrorConfig<
      | RoleDeleteStatus400
      | RoleDeleteStatus401
      | RoleDeleteStatus403
      | RoleDeleteStatus404
      | RoleDeleteStatus500
      | RoleDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getRoleDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
