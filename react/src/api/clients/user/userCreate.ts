/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserCreateData,
  UserCreateStatus200,
  UserCreateStatus400,
  UserCreateStatus401,
  UserCreateStatus403,
  UserCreateStatus404,
  UserCreateStatus500,
  UserCreateStatus501,
} from "../../models/user/UserCreate.ts";

function getUserCreateUrl() {
  const res = { method: "POST", url: `/api/identity/users` as const };

  return res;
}

/**
 * {@link /api/identity/users}
 */
export async function userCreate(
  data?: UserCreateData,
  config: Partial<RequestConfig<UserCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    UserCreateStatus200,
    ResponseErrorConfig<
      | UserCreateStatus400
      | UserCreateStatus401
      | UserCreateStatus403
      | UserCreateStatus404
      | UserCreateStatus500
      | UserCreateStatus501
    >,
    UserCreateData
  >({
    method: "POST",
    url: getUserCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
