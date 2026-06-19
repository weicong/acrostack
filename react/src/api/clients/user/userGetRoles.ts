/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserGetRolesPathId,
  UserGetRolesStatus200,
  UserGetRolesStatus400,
  UserGetRolesStatus401,
  UserGetRolesStatus403,
  UserGetRolesStatus404,
  UserGetRolesStatus500,
  UserGetRolesStatus501,
} from "../../models/user/UserGetRoles.ts";

function getUserGetRolesUrl(id: UserGetRolesPathId) {
  const res = { method: "GET", url: `/api/identity/users/${id}/roles` as const };

  return res;
}

/**
 * {@link /api/identity/users/:id/roles}
 */
export async function userGetRoles(
  id: UserGetRolesPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserGetRolesStatus200,
    ResponseErrorConfig<
      | UserGetRolesStatus400
      | UserGetRolesStatus401
      | UserGetRolesStatus403
      | UserGetRolesStatus404
      | UserGetRolesStatus500
      | UserGetRolesStatus501
    >,
    unknown
  >({ method: "GET", url: getUserGetRolesUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
