/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserFindByEmailPathEmail,
  UserFindByEmailStatus200,
  UserFindByEmailStatus400,
  UserFindByEmailStatus401,
  UserFindByEmailStatus403,
  UserFindByEmailStatus404,
  UserFindByEmailStatus500,
  UserFindByEmailStatus501,
} from "../../models/user/UserFindByEmail.ts";

function getUserFindByEmailUrl(email: UserFindByEmailPathEmail) {
  const res = { method: "GET", url: `/api/identity/users/by-email/${email}` as const };

  return res;
}

/**
 * {@link /api/identity/users/by-email/:email}
 */
export async function userFindByEmail(
  email: UserFindByEmailPathEmail,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserFindByEmailStatus200,
    ResponseErrorConfig<
      | UserFindByEmailStatus400
      | UserFindByEmailStatus401
      | UserFindByEmailStatus403
      | UserFindByEmailStatus404
      | UserFindByEmailStatus500
      | UserFindByEmailStatus501
    >,
    unknown
  >({ method: "GET", url: getUserFindByEmailUrl(email).url.toString(), ...requestConfig });

  return res.data;
}
