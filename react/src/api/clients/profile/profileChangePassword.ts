/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ProfileChangePasswordData,
  ProfileChangePasswordStatus200,
  ProfileChangePasswordStatus204,
  ProfileChangePasswordStatus400,
  ProfileChangePasswordStatus401,
  ProfileChangePasswordStatus403,
  ProfileChangePasswordStatus404,
  ProfileChangePasswordStatus500,
  ProfileChangePasswordStatus501,
} from "../../models/profile/ProfileChangePassword.ts";

function getProfileChangePasswordUrl() {
  const res = { method: "POST", url: `/api/account/my-profile/change-password` as const };

  return res;
}

/**
 * {@link /api/account/my-profile/change-password}
 */
export async function profileChangePassword(
  data?: ProfileChangePasswordData,
  config: Partial<RequestConfig<ProfileChangePasswordData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ProfileChangePasswordStatus200 | ProfileChangePasswordStatus204,
    ResponseErrorConfig<
      | ProfileChangePasswordStatus400
      | ProfileChangePasswordStatus401
      | ProfileChangePasswordStatus403
      | ProfileChangePasswordStatus404
      | ProfileChangePasswordStatus500
      | ProfileChangePasswordStatus501
    >,
    ProfileChangePasswordData
  >({
    method: "POST",
    url: getProfileChangePasswordUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
