/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  LoginLoginData,
  LoginLoginStatus200,
  LoginLoginStatus400,
  LoginLoginStatus401,
  LoginLoginStatus403,
  LoginLoginStatus404,
  LoginLoginStatus500,
  LoginLoginStatus501,
} from "../../models/login/LoginLogin.ts";

function getLoginLoginUrl() {
  const res = { method: "POST", url: `/api/account/login` as const };

  return res;
}

/**
 * {@link /api/account/login}
 */
export async function loginLogin(
  data?: LoginLoginData,
  config: Partial<RequestConfig<LoginLoginData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    LoginLoginStatus200,
    ResponseErrorConfig<
      | LoginLoginStatus400
      | LoginLoginStatus401
      | LoginLoginStatus403
      | LoginLoginStatus404
      | LoginLoginStatus500
      | LoginLoginStatus501
    >,
    LoginLoginData
  >({
    method: "POST",
    url: getLoginLoginUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
