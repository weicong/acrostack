/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AccountRegisterData,
  AccountRegisterStatus200,
  AccountRegisterStatus400,
  AccountRegisterStatus401,
  AccountRegisterStatus403,
  AccountRegisterStatus404,
  AccountRegisterStatus500,
  AccountRegisterStatus501,
} from "../../models/account/AccountRegister.ts";

function getAccountRegisterUrl() {
  const res = { method: "POST", url: `/api/account/register` as const };

  return res;
}

/**
 * {@link /api/account/register}
 */
export async function accountRegister(
  data?: AccountRegisterData,
  config: Partial<RequestConfig<AccountRegisterData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    AccountRegisterStatus200,
    ResponseErrorConfig<
      | AccountRegisterStatus400
      | AccountRegisterStatus401
      | AccountRegisterStatus403
      | AccountRegisterStatus404
      | AccountRegisterStatus500
      | AccountRegisterStatus501
    >,
    AccountRegisterData
  >({
    method: "POST",
    url: getAccountRegisterUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
