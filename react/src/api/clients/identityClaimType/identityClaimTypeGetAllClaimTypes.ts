/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityClaimTypeGetAllClaimTypesStatus200,
  IdentityClaimTypeGetAllClaimTypesStatus400,
  IdentityClaimTypeGetAllClaimTypesStatus401,
  IdentityClaimTypeGetAllClaimTypesStatus403,
  IdentityClaimTypeGetAllClaimTypesStatus404,
  IdentityClaimTypeGetAllClaimTypesStatus500,
  IdentityClaimTypeGetAllClaimTypesStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGetAllClaimTypes.ts";

function getIdentityClaimTypeGetAllClaimTypesUrl() {
  const res = { method: "GET", url: `/api/app/identity-claim-type/all` as const };

  return res;
}

/**
 * {@link /api/app/identity-claim-type/all}
 */
export async function identityClaimTypeGetAllClaimTypes(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityClaimTypeGetAllClaimTypesStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeGetAllClaimTypesStatus400
      | IdentityClaimTypeGetAllClaimTypesStatus401
      | IdentityClaimTypeGetAllClaimTypesStatus403
      | IdentityClaimTypeGetAllClaimTypesStatus404
      | IdentityClaimTypeGetAllClaimTypesStatus500
      | IdentityClaimTypeGetAllClaimTypesStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getIdentityClaimTypeGetAllClaimTypesUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
