/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserLookupGetCountQueryFilter,
  UserLookupGetCountStatus200,
  UserLookupGetCountStatus400,
  UserLookupGetCountStatus401,
  UserLookupGetCountStatus403,
  UserLookupGetCountStatus404,
  UserLookupGetCountStatus500,
  UserLookupGetCountStatus501,
} from "../../models/userLookup/UserLookupGetCount.ts";

function getUserLookupGetCountUrl() {
  const res = { method: "GET", url: `/api/identity/users/lookup/count` as const };

  return res;
}

/**
 * {@link /api/identity/users/lookup/count}
 */
export async function userLookupGetCount(
  params?: { Filter?: UserLookupGetCountQueryFilter },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserLookupGetCountStatus200,
    ResponseErrorConfig<
      | UserLookupGetCountStatus400
      | UserLookupGetCountStatus401
      | UserLookupGetCountStatus403
      | UserLookupGetCountStatus404
      | UserLookupGetCountStatus500
      | UserLookupGetCountStatus501
    >,
    unknown
  >({ method: "GET", url: getUserLookupGetCountUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
