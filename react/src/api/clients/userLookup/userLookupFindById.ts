/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserLookupFindByIdPathId,
  UserLookupFindByIdStatus200,
  UserLookupFindByIdStatus400,
  UserLookupFindByIdStatus401,
  UserLookupFindByIdStatus403,
  UserLookupFindByIdStatus404,
  UserLookupFindByIdStatus500,
  UserLookupFindByIdStatus501,
} from "../../models/userLookup/UserLookupFindById.ts";

function getUserLookupFindByIdUrl(id: UserLookupFindByIdPathId) {
  const res = { method: "GET", url: `/api/identity/users/lookup/${id}` as const };

  return res;
}

/**
 * {@link /api/identity/users/lookup/:id}
 */
export async function userLookupFindById(
  id: UserLookupFindByIdPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserLookupFindByIdStatus200,
    ResponseErrorConfig<
      | UserLookupFindByIdStatus400
      | UserLookupFindByIdStatus401
      | UserLookupFindByIdStatus403
      | UserLookupFindByIdStatus404
      | UserLookupFindByIdStatus500
      | UserLookupFindByIdStatus501
    >,
    unknown
  >({ method: "GET", url: getUserLookupFindByIdUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
