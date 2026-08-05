/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityClaimTypeGetListQueryName,
  IdentityClaimTypeGetListQuerySorting,
  IdentityClaimTypeGetListQuerySkipCount,
  IdentityClaimTypeGetListQueryMaxResultCount,
  IdentityClaimTypeGetListStatus200,
  IdentityClaimTypeGetListStatus400,
  IdentityClaimTypeGetListStatus401,
  IdentityClaimTypeGetListStatus403,
  IdentityClaimTypeGetListStatus404,
  IdentityClaimTypeGetListStatus500,
  IdentityClaimTypeGetListStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGetList.ts";

function getIdentityClaimTypeGetListUrl() {
  const res = { method: "GET", url: `/api/app/identity-claim-type` as const };

  return res;
}

/**
 * {@link /api/app/identity-claim-type}
 */
export async function identityClaimTypeGetList(
  params?: {
    Name?: IdentityClaimTypeGetListQueryName;
    Sorting?: IdentityClaimTypeGetListQuerySorting;
    SkipCount?: IdentityClaimTypeGetListQuerySkipCount;
    MaxResultCount?: IdentityClaimTypeGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityClaimTypeGetListStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeGetListStatus400
      | IdentityClaimTypeGetListStatus401
      | IdentityClaimTypeGetListStatus403
      | IdentityClaimTypeGetListStatus404
      | IdentityClaimTypeGetListStatus500
      | IdentityClaimTypeGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getIdentityClaimTypeGetListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
