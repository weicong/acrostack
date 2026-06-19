/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AccountResetPasswordData,
  AccountResetPasswordStatus200,
  AccountResetPasswordStatus204,
  AccountResetPasswordStatus400,
  AccountResetPasswordStatus401,
  AccountResetPasswordStatus403,
  AccountResetPasswordStatus404,
  AccountResetPasswordStatus500,
  AccountResetPasswordStatus501,
} from "../../models/account/AccountResetPassword.ts";

function getAccountResetPasswordUrl() {
  const res = { method: "POST", url: `/api/account/reset-password` as const };

  return res;
}

/**
 * {@link /api/account/reset-password}
 */
export async function accountResetPassword(
  data?: AccountResetPasswordData,
  config: Partial<RequestConfig<AccountResetPasswordData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    AccountResetPasswordStatus200 | AccountResetPasswordStatus204,
    ResponseErrorConfig<
      | AccountResetPasswordStatus400
      | AccountResetPasswordStatus401
      | AccountResetPasswordStatus403
      | AccountResetPasswordStatus404
      | AccountResetPasswordStatus500
      | AccountResetPasswordStatus501
    >,
    AccountResetPasswordData
  >({
    method: "POST",
    url: getAccountResetPasswordUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
