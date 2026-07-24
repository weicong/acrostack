/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityRoleClaimCreateData,
  IdentityRoleClaimCreateStatus200,
  IdentityRoleClaimCreateStatus400,
  IdentityRoleClaimCreateStatus401,
  IdentityRoleClaimCreateStatus403,
  IdentityRoleClaimCreateStatus404,
  IdentityRoleClaimCreateStatus500,
  IdentityRoleClaimCreateStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimCreate.ts";

function getIdentityRoleClaimCreateUrl() {
  const res = { method: "POST", url: `/api/app/identity-role-claim` as const };

  return res;
}

/**
 * {@link /api/app/identity-role-claim}
 */
export async function identityRoleClaimCreate(
  data?: IdentityRoleClaimCreateData,
  config: Partial<RequestConfig<IdentityRoleClaimCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    IdentityRoleClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimCreateStatus400
      | IdentityRoleClaimCreateStatus401
      | IdentityRoleClaimCreateStatus403
      | IdentityRoleClaimCreateStatus404
      | IdentityRoleClaimCreateStatus500
      | IdentityRoleClaimCreateStatus501
    >,
    IdentityRoleClaimCreateData
  >({
    method: "POST",
    url: getIdentityRoleClaimCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
