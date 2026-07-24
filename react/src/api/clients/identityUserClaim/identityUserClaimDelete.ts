/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityUserClaimDeletePathId,
  IdentityUserClaimDeleteStatus200,
  IdentityUserClaimDeleteStatus204,
  IdentityUserClaimDeleteStatus400,
  IdentityUserClaimDeleteStatus401,
  IdentityUserClaimDeleteStatus403,
  IdentityUserClaimDeleteStatus404,
  IdentityUserClaimDeleteStatus500,
  IdentityUserClaimDeleteStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimDelete.ts";

function getIdentityUserClaimDeleteUrl(id: IdentityUserClaimDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/identity-user-claim/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export async function identityUserClaimDelete(
  id: IdentityUserClaimDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityUserClaimDeleteStatus200 | IdentityUserClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityUserClaimDeleteStatus400
      | IdentityUserClaimDeleteStatus401
      | IdentityUserClaimDeleteStatus403
      | IdentityUserClaimDeleteStatus404
      | IdentityUserClaimDeleteStatus500
      | IdentityUserClaimDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getIdentityUserClaimDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
