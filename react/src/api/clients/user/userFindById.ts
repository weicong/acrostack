/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserFindByIdPathId,
  UserFindByIdStatus200,
  UserFindByIdStatus400,
  UserFindByIdStatus401,
  UserFindByIdStatus403,
  UserFindByIdStatus404,
  UserFindByIdStatus500,
  UserFindByIdStatus501,
} from "../../models/user/UserFindById.ts";

function getUserFindByIdUrl(id: UserFindByIdPathId) {
  const res = { method: "GET", url: `/api/identity/users/by-id/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/users/by-id/:id}
 */
export async function userFindById(
  id: UserFindByIdPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserFindByIdStatus200,
    ResponseErrorConfig<
      | UserFindByIdStatus400
      | UserFindByIdStatus401
      | UserFindByIdStatus403
      | UserFindByIdStatus404
      | UserFindByIdStatus500
      | UserFindByIdStatus501
    >,
    unknown
  >({ method: "GET", url: getUserFindByIdUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
