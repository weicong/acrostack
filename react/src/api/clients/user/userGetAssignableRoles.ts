/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserGetAssignableRolesStatus200,
  UserGetAssignableRolesStatus400,
  UserGetAssignableRolesStatus401,
  UserGetAssignableRolesStatus403,
  UserGetAssignableRolesStatus404,
  UserGetAssignableRolesStatus500,
  UserGetAssignableRolesStatus501,
} from "../../models/user/UserGetAssignableRoles.ts";

function getUserGetAssignableRolesUrl() {
  const res = { method: "GET", url: `/api/identity/users/assignable-roles` as const };

  return res;
}

/**
 * {@link /api/identity/users/assignable-roles}
 */
export async function userGetAssignableRoles(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserGetAssignableRolesStatus200,
    ResponseErrorConfig<
      | UserGetAssignableRolesStatus400
      | UserGetAssignableRolesStatus401
      | UserGetAssignableRolesStatus403
      | UserGetAssignableRolesStatus404
      | UserGetAssignableRolesStatus500
      | UserGetAssignableRolesStatus501
    >,
    unknown
  >({ method: "GET", url: getUserGetAssignableRolesUrl().url.toString(), ...requestConfig });

  return res.data;
}
