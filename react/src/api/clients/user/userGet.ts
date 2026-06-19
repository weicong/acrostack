/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserGetPathId,
  UserGetStatus200,
  UserGetStatus400,
  UserGetStatus401,
  UserGetStatus403,
  UserGetStatus404,
  UserGetStatus500,
  UserGetStatus501,
} from "../../models/user/UserGet.ts";

function getUserGetUrl(id: UserGetPathId) {
  const res = { method: "GET", url: `/api/identity/users/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/users/:id}
 */
export async function userGet(
  id: UserGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserGetStatus200,
    ResponseErrorConfig<
      | UserGetStatus400
      | UserGetStatus401
      | UserGetStatus403
      | UserGetStatus404
      | UserGetStatus500
      | UserGetStatus501
    >,
    unknown
  >({ method: "GET", url: getUserGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
