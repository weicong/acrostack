/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserDeletePathId,
  UserDeleteStatus200,
  UserDeleteStatus204,
  UserDeleteStatus400,
  UserDeleteStatus401,
  UserDeleteStatus403,
  UserDeleteStatus404,
  UserDeleteStatus500,
  UserDeleteStatus501,
} from "../../models/user/UserDelete.ts";

function getUserDeleteUrl(id: UserDeletePathId) {
  const res = { method: "DELETE", url: `/api/identity/users/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/users/:id}
 */
export async function userDelete(
  id: UserDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserDeleteStatus200 | UserDeleteStatus204,
    ResponseErrorConfig<
      | UserDeleteStatus400
      | UserDeleteStatus401
      | UserDeleteStatus403
      | UserDeleteStatus404
      | UserDeleteStatus500
      | UserDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getUserDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
