/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityClaimTypeDeletePathId,
  IdentityClaimTypeDeleteStatus200,
  IdentityClaimTypeDeleteStatus204,
  IdentityClaimTypeDeleteStatus400,
  IdentityClaimTypeDeleteStatus401,
  IdentityClaimTypeDeleteStatus403,
  IdentityClaimTypeDeleteStatus404,
  IdentityClaimTypeDeleteStatus500,
  IdentityClaimTypeDeleteStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeDelete.ts";

function getIdentityClaimTypeDeleteUrl(id: IdentityClaimTypeDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/identity-claim-type/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export async function identityClaimTypeDelete(
  id: IdentityClaimTypeDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityClaimTypeDeleteStatus200 | IdentityClaimTypeDeleteStatus204,
    ResponseErrorConfig<
      | IdentityClaimTypeDeleteStatus400
      | IdentityClaimTypeDeleteStatus401
      | IdentityClaimTypeDeleteStatus403
      | IdentityClaimTypeDeleteStatus404
      | IdentityClaimTypeDeleteStatus500
      | IdentityClaimTypeDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getIdentityClaimTypeDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
