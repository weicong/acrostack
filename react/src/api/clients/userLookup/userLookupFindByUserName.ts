/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserLookupFindByUserNamePathUserName,
  UserLookupFindByUserNameStatus200,
  UserLookupFindByUserNameStatus400,
  UserLookupFindByUserNameStatus401,
  UserLookupFindByUserNameStatus403,
  UserLookupFindByUserNameStatus404,
  UserLookupFindByUserNameStatus500,
  UserLookupFindByUserNameStatus501,
} from "../../models/userLookup/UserLookupFindByUserName.ts";

function getUserLookupFindByUserNameUrl(userName: UserLookupFindByUserNamePathUserName) {
  const res = { method: "GET", url: `/api/identity/users/lookup/by-username/${userName}` as const };

  return res;
}

/**
 * {@link /api/identity/users/lookup/by-username/:userName}
 */
export async function userLookupFindByUserName(
  userName: UserLookupFindByUserNamePathUserName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserLookupFindByUserNameStatus200,
    ResponseErrorConfig<
      | UserLookupFindByUserNameStatus400
      | UserLookupFindByUserNameStatus401
      | UserLookupFindByUserNameStatus403
      | UserLookupFindByUserNameStatus404
      | UserLookupFindByUserNameStatus500
      | UserLookupFindByUserNameStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getUserLookupFindByUserNameUrl(userName).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
