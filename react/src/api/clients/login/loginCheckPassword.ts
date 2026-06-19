/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  LoginCheckPasswordData,
  LoginCheckPasswordStatus200,
  LoginCheckPasswordStatus400,
  LoginCheckPasswordStatus401,
  LoginCheckPasswordStatus403,
  LoginCheckPasswordStatus404,
  LoginCheckPasswordStatus500,
  LoginCheckPasswordStatus501,
} from "../../models/login/LoginCheckPassword.ts";

function getLoginCheckPasswordUrl() {
  const res = { method: "POST", url: `/api/account/check-password` as const };

  return res;
}

/**
 * {@link /api/account/check-password}
 */
export async function loginCheckPassword(
  data?: LoginCheckPasswordData,
  config: Partial<RequestConfig<LoginCheckPasswordData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    LoginCheckPasswordStatus200,
    ResponseErrorConfig<
      | LoginCheckPasswordStatus400
      | LoginCheckPasswordStatus401
      | LoginCheckPasswordStatus403
      | LoginCheckPasswordStatus404
      | LoginCheckPasswordStatus500
      | LoginCheckPasswordStatus501
    >,
    LoginCheckPasswordData
  >({
    method: "POST",
    url: getLoginCheckPasswordUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
