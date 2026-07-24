/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityUserClaimGetListQueryUserId,
  IdentityUserClaimGetListStatus200,
  IdentityUserClaimGetListStatus400,
  IdentityUserClaimGetListStatus401,
  IdentityUserClaimGetListStatus403,
  IdentityUserClaimGetListStatus404,
  IdentityUserClaimGetListStatus500,
  IdentityUserClaimGetListStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimGetList.ts";

function getIdentityUserClaimGetListUrl() {
  const res = { method: "GET", url: `/api/app/identity-user-claim` as const };

  return res;
}

/**
 * {@link /api/app/identity-user-claim}
 */
export async function identityUserClaimGetList(
  params?: { userId?: IdentityUserClaimGetListQueryUserId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityUserClaimGetListStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimGetListStatus400
      | IdentityUserClaimGetListStatus401
      | IdentityUserClaimGetListStatus403
      | IdentityUserClaimGetListStatus404
      | IdentityUserClaimGetListStatus500
      | IdentityUserClaimGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getIdentityUserClaimGetListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
