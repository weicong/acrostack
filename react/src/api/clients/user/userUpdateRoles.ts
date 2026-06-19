/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserUpdateRolesPathId,
  UserUpdateRolesData,
  UserUpdateRolesStatus200,
  UserUpdateRolesStatus204,
  UserUpdateRolesStatus400,
  UserUpdateRolesStatus401,
  UserUpdateRolesStatus403,
  UserUpdateRolesStatus404,
  UserUpdateRolesStatus500,
  UserUpdateRolesStatus501,
} from "../../models/user/UserUpdateRoles.ts";

function getUserUpdateRolesUrl(id: UserUpdateRolesPathId) {
  const res = { method: "PUT", url: `/api/identity/users/${id}/roles` as const };

  return res;
}

/**
 * {@link /api/identity/users/:id/roles}
 */
export async function userUpdateRoles(
  id: UserUpdateRolesPathId,
  data?: UserUpdateRolesData,
  config: Partial<RequestConfig<UserUpdateRolesData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    UserUpdateRolesStatus200 | UserUpdateRolesStatus204,
    ResponseErrorConfig<
      | UserUpdateRolesStatus400
      | UserUpdateRolesStatus401
      | UserUpdateRolesStatus403
      | UserUpdateRolesStatus404
      | UserUpdateRolesStatus500
      | UserUpdateRolesStatus501
    >,
    UserUpdateRolesData
  >({
    method: "PUT",
    url: getUserUpdateRolesUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
