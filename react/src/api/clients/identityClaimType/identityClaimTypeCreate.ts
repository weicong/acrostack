/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityClaimTypeCreateData,
  IdentityClaimTypeCreateStatus200,
  IdentityClaimTypeCreateStatus400,
  IdentityClaimTypeCreateStatus401,
  IdentityClaimTypeCreateStatus403,
  IdentityClaimTypeCreateStatus404,
  IdentityClaimTypeCreateStatus500,
  IdentityClaimTypeCreateStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeCreate.ts";

function getIdentityClaimTypeCreateUrl() {
  const res = { method: "POST", url: `/api/app/identity-claim-type` as const };

  return res;
}

/**
 * {@link /api/app/identity-claim-type}
 */
export async function identityClaimTypeCreate(
  data?: IdentityClaimTypeCreateData,
  config: Partial<RequestConfig<IdentityClaimTypeCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    IdentityClaimTypeCreateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeCreateStatus400
      | IdentityClaimTypeCreateStatus401
      | IdentityClaimTypeCreateStatus403
      | IdentityClaimTypeCreateStatus404
      | IdentityClaimTypeCreateStatus500
      | IdentityClaimTypeCreateStatus501
    >,
    IdentityClaimTypeCreateData
  >({
    method: "POST",
    url: getIdentityClaimTypeCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
