/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserFindByUsernamePathUserName,
  UserFindByUsernameStatus200,
  UserFindByUsernameStatus400,
  UserFindByUsernameStatus401,
  UserFindByUsernameStatus403,
  UserFindByUsernameStatus404,
  UserFindByUsernameStatus500,
  UserFindByUsernameStatus501,
} from "../../models/user/UserFindByUsername.ts";

function getUserFindByUsernameUrl(userName: UserFindByUsernamePathUserName) {
  const res = { method: "GET", url: `/api/identity/users/by-username/${userName}` as const };

  return res;
}

/**
 * {@link /api/identity/users/by-username/:userName}
 */
export async function userFindByUsername(
  userName: UserFindByUsernamePathUserName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserFindByUsernameStatus200,
    ResponseErrorConfig<
      | UserFindByUsernameStatus400
      | UserFindByUsernameStatus401
      | UserFindByUsernameStatus403
      | UserFindByUsernameStatus404
      | UserFindByUsernameStatus500
      | UserFindByUsernameStatus501
    >,
    unknown
  >({ method: "GET", url: getUserFindByUsernameUrl(userName).url.toString(), ...requestConfig });

  return res.data;
}
