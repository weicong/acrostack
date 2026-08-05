/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityClaimTypeGetPathId,
  IdentityClaimTypeGetStatus200,
  IdentityClaimTypeGetStatus400,
  IdentityClaimTypeGetStatus401,
  IdentityClaimTypeGetStatus403,
  IdentityClaimTypeGetStatus404,
  IdentityClaimTypeGetStatus500,
  IdentityClaimTypeGetStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeGet.ts";

function getIdentityClaimTypeGetUrl(id: IdentityClaimTypeGetPathId) {
  const res = { method: "GET", url: `/api/app/identity-claim-type/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export async function identityClaimTypeGet(
  id: IdentityClaimTypeGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityClaimTypeGetStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeGetStatus400
      | IdentityClaimTypeGetStatus401
      | IdentityClaimTypeGetStatus403
      | IdentityClaimTypeGetStatus404
      | IdentityClaimTypeGetStatus500
      | IdentityClaimTypeGetStatus501
    >,
    unknown
  >({ method: "GET", url: getIdentityClaimTypeGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
