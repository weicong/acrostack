/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AccountVerifyPasswordResetTokenData,
  AccountVerifyPasswordResetTokenStatus200,
  AccountVerifyPasswordResetTokenStatus400,
  AccountVerifyPasswordResetTokenStatus401,
  AccountVerifyPasswordResetTokenStatus403,
  AccountVerifyPasswordResetTokenStatus404,
  AccountVerifyPasswordResetTokenStatus500,
  AccountVerifyPasswordResetTokenStatus501,
} from "../../models/account/AccountVerifyPasswordResetToken.ts";

function getAccountVerifyPasswordResetTokenUrl() {
  const res = { method: "POST", url: `/api/account/verify-password-reset-token` as const };

  return res;
}

/**
 * {@link /api/account/verify-password-reset-token}
 */
export async function accountVerifyPasswordResetToken(
  data?: AccountVerifyPasswordResetTokenData,
  config: Partial<RequestConfig<AccountVerifyPasswordResetTokenData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    AccountVerifyPasswordResetTokenStatus200,
    ResponseErrorConfig<
      | AccountVerifyPasswordResetTokenStatus400
      | AccountVerifyPasswordResetTokenStatus401
      | AccountVerifyPasswordResetTokenStatus403
      | AccountVerifyPasswordResetTokenStatus404
      | AccountVerifyPasswordResetTokenStatus500
      | AccountVerifyPasswordResetTokenStatus501
    >,
    AccountVerifyPasswordResetTokenData
  >({
    method: "POST",
    url: getAccountVerifyPasswordResetTokenUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
