/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityRoleClaimGetListQueryRoleId,
  IdentityRoleClaimGetListStatus200,
  IdentityRoleClaimGetListStatus400,
  IdentityRoleClaimGetListStatus401,
  IdentityRoleClaimGetListStatus403,
  IdentityRoleClaimGetListStatus404,
  IdentityRoleClaimGetListStatus500,
  IdentityRoleClaimGetListStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimGetList.ts";

function getIdentityRoleClaimGetListUrl() {
  const res = { method: "GET", url: `/api/app/identity-role-claim` as const };

  return res;
}

/**
 * {@link /api/app/identity-role-claim}
 */
export async function identityRoleClaimGetList(
  params?: { roleId?: IdentityRoleClaimGetListQueryRoleId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    IdentityRoleClaimGetListStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimGetListStatus400
      | IdentityRoleClaimGetListStatus401
      | IdentityRoleClaimGetListStatus403
      | IdentityRoleClaimGetListStatus404
      | IdentityRoleClaimGetListStatus500
      | IdentityRoleClaimGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getIdentityRoleClaimGetListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
