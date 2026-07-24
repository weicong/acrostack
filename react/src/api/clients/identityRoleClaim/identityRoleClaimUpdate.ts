/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityRoleClaimUpdatePathId,
  IdentityRoleClaimUpdateData,
  IdentityRoleClaimUpdateStatus200,
  IdentityRoleClaimUpdateStatus400,
  IdentityRoleClaimUpdateStatus401,
  IdentityRoleClaimUpdateStatus403,
  IdentityRoleClaimUpdateStatus404,
  IdentityRoleClaimUpdateStatus500,
  IdentityRoleClaimUpdateStatus501,
} from "../../models/identityRoleClaim/IdentityRoleClaimUpdate.ts";

function getIdentityRoleClaimUpdateUrl(id: IdentityRoleClaimUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/identity-role-claim/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export async function identityRoleClaimUpdate(
  id: IdentityRoleClaimUpdatePathId,
  data?: IdentityRoleClaimUpdateData,
  config: Partial<RequestConfig<IdentityRoleClaimUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    IdentityRoleClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityRoleClaimUpdateStatus400
      | IdentityRoleClaimUpdateStatus401
      | IdentityRoleClaimUpdateStatus403
      | IdentityRoleClaimUpdateStatus404
      | IdentityRoleClaimUpdateStatus500
      | IdentityRoleClaimUpdateStatus501
    >,
    IdentityRoleClaimUpdateData
  >({
    method: "PUT",
    url: getIdentityRoleClaimUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
