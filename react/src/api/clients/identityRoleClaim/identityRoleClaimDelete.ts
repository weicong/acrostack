/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityRoleClaimDeletePathId,
  IdentityRoleClaimDeleteStatus200,
  IdentityRoleClaimDeleteStatus204,
  IdentityRoleClaimDeleteStatus400,
  IdentityRoleClaimDeleteStatus401,
  IdentityRoleClaimDeleteStatus403,
  IdentityRoleClaimDeleteStatus404,
  IdentityRoleClaimDeleteStatus500,
  IdentityRoleClaimDeleteStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimDelete.ts";

function getIdentityRoleClaimDeleteUrl(id: IdentityRoleClaimDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/identity-role-claim/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export async function identityRoleClaimDelete(
  id: IdentityRoleClaimDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityRoleClaimDeleteStatus200 | IdentityRoleClaimDeleteStatus204,
    ResponseErrorConfig<
      | IdentityRoleClaimDeleteStatus400
      | IdentityRoleClaimDeleteStatus401
      | IdentityRoleClaimDeleteStatus403
      | IdentityRoleClaimDeleteStatus404
      | IdentityRoleClaimDeleteStatus500
      | IdentityRoleClaimDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getIdentityRoleClaimDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
