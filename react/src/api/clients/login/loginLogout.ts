/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  LoginLogoutStatus200,
  LoginLogoutStatus204,
  LoginLogoutStatus400,
  LoginLogoutStatus401,
  LoginLogoutStatus403,
  LoginLogoutStatus404,
  LoginLogoutStatus500,
  LoginLogoutStatus501,
} from "../../models/login/LoginLogout.ts";

function getLoginLogoutUrl() {
  const res = { method: "GET", url: `/api/account/logout` as const };

  return res;
}

/**
 * {@link /api/account/logout}
 */
export async function loginLogout(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    LoginLogoutStatus200 | LoginLogoutStatus204,
    ResponseErrorConfig<
      | LoginLogoutStatus400
      | LoginLogoutStatus401
      | LoginLogoutStatus403
      | LoginLogoutStatus404
      | LoginLogoutStatus500
      | LoginLogoutStatus501
    >,
    unknown
  >({ method: "GET", url: getLoginLogoutUrl().url.toString(), ...requestConfig });

  return res.data;
}
