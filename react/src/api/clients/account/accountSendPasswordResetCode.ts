/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AccountSendPasswordResetCodeData,
  AccountSendPasswordResetCodeStatus200,
  AccountSendPasswordResetCodeStatus204,
  AccountSendPasswordResetCodeStatus400,
  AccountSendPasswordResetCodeStatus401,
  AccountSendPasswordResetCodeStatus403,
  AccountSendPasswordResetCodeStatus404,
  AccountSendPasswordResetCodeStatus500,
  AccountSendPasswordResetCodeStatus501,
} from "../../models/account/AccountSendPasswordResetCode.ts";

function getAccountSendPasswordResetCodeUrl() {
  const res = { method: "POST", url: `/api/account/send-password-reset-code` as const };

  return res;
}

/**
 * {@link /api/account/send-password-reset-code}
 */
export async function accountSendPasswordResetCode(
  data?: AccountSendPasswordResetCodeData,
  config: Partial<RequestConfig<AccountSendPasswordResetCodeData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    AccountSendPasswordResetCodeStatus200 | AccountSendPasswordResetCodeStatus204,
    ResponseErrorConfig<
      | AccountSendPasswordResetCodeStatus400
      | AccountSendPasswordResetCodeStatus401
      | AccountSendPasswordResetCodeStatus403
      | AccountSendPasswordResetCodeStatus404
      | AccountSendPasswordResetCodeStatus500
      | AccountSendPasswordResetCodeStatus501
    >,
    AccountSendPasswordResetCodeData
  >({
    method: "POST",
    url: getAccountSendPasswordResetCodeUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
