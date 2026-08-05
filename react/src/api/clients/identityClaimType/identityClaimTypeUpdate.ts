/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityClaimTypeUpdatePathId,
  IdentityClaimTypeUpdateData,
  IdentityClaimTypeUpdateStatus200,
  IdentityClaimTypeUpdateStatus400,
  IdentityClaimTypeUpdateStatus401,
  IdentityClaimTypeUpdateStatus403,
  IdentityClaimTypeUpdateStatus404,
  IdentityClaimTypeUpdateStatus500,
  IdentityClaimTypeUpdateStatus501,
} from "../../models/identityClaimType/IdentityClaimTypeUpdate.ts";

function getIdentityClaimTypeUpdateUrl(id: IdentityClaimTypeUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/identity-claim-type/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export async function identityClaimTypeUpdate(
  id: IdentityClaimTypeUpdatePathId,
  data?: IdentityClaimTypeUpdateData,
  config: Partial<RequestConfig<IdentityClaimTypeUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    IdentityClaimTypeUpdateStatus200,
    ResponseErrorConfig<
      | IdentityClaimTypeUpdateStatus400
      | IdentityClaimTypeUpdateStatus401
      | IdentityClaimTypeUpdateStatus403
      | IdentityClaimTypeUpdateStatus404
      | IdentityClaimTypeUpdateStatus500
      | IdentityClaimTypeUpdateStatus501
    >,
    IdentityClaimTypeUpdateData
  >({
    method: "PUT",
    url: getIdentityClaimTypeUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
