/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserUpdatePathId,
  UserUpdateData,
  UserUpdateStatus200,
  UserUpdateStatus400,
  UserUpdateStatus401,
  UserUpdateStatus403,
  UserUpdateStatus404,
  UserUpdateStatus500,
  UserUpdateStatus501,
} from "../../models/user/UserUpdate.ts";

function getUserUpdateUrl(id: UserUpdatePathId) {
  const res = { method: "PUT", url: `/api/identity/users/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/users/:id}
 */
export async function userUpdate(
  id: UserUpdatePathId,
  data?: UserUpdateData,
  config: Partial<RequestConfig<UserUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    UserUpdateStatus200,
    ResponseErrorConfig<
      | UserUpdateStatus400
      | UserUpdateStatus401
      | UserUpdateStatus403
      | UserUpdateStatus404
      | UserUpdateStatus500
      | UserUpdateStatus501
    >,
    UserUpdateData
  >({
    method: "PUT",
    url: getUserUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
