/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  IdentityUserClaimUpdatePathId,
  IdentityUserClaimUpdateData,
  IdentityUserClaimUpdateStatus200,
  IdentityUserClaimUpdateStatus400,
  IdentityUserClaimUpdateStatus401,
  IdentityUserClaimUpdateStatus403,
  IdentityUserClaimUpdateStatus404,
  IdentityUserClaimUpdateStatus500,
  IdentityUserClaimUpdateStatus501,
} from "../../models/identityUserClaim/IdentityUserClaimUpdate.ts";

function getIdentityUserClaimUpdateUrl(id: IdentityUserClaimUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/identity-user-claim/${id}` as const };

  return res;
}

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export async function identityUserClaimUpdate(
  id: IdentityUserClaimUpdatePathId,
  data?: IdentityUserClaimUpdateData,
  config: Partial<RequestConfig<IdentityUserClaimUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    IdentityUserClaimUpdateStatus200,
    ResponseErrorConfig<
      | IdentityUserClaimUpdateStatus400
      | IdentityUserClaimUpdateStatus401
      | IdentityUserClaimUpdateStatus403
      | IdentityUserClaimUpdateStatus404
      | IdentityUserClaimUpdateStatus500
      | IdentityUserClaimUpdateStatus501
    >,
    IdentityUserClaimUpdateData
  >({
    method: "PUT",
    url: getIdentityUserClaimUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
