/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityUserClaimCreateData,
  IdentityUserClaimCreateStatus200,
  IdentityUserClaimCreateStatus400,
  IdentityUserClaimCreateStatus401,
  IdentityUserClaimCreateStatus403,
  IdentityUserClaimCreateStatus404,
  IdentityUserClaimCreateStatus500,
  IdentityUserClaimCreateStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimCreate.ts";

function getIdentityUserClaimCreateUrl() {
  const res = { method: "POST", url: `/api/app/identity-user-claim` as const };

  return res;
}

/**
 * {@link /api/app/identity-user-claim}
 */
export async function identityUserClaimCreate(
  data?: IdentityUserClaimCreateData,
  config: Partial<RequestConfig<IdentityUserClaimCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    IdentityUserClaimCreateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimCreateStatus400
      | IdentityUserClaimCreateStatus401
      | IdentityUserClaimCreateStatus403
      | IdentityUserClaimCreateStatus404
      | IdentityUserClaimCreateStatus500
      | IdentityUserClaimCreateStatus501
    >,
    IdentityUserClaimCreateData
  >({
    method: "POST",
    url: getIdentityUserClaimCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
