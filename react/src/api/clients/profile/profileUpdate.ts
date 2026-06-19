/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ProfileUpdateData,
  ProfileUpdateStatus200,
  ProfileUpdateStatus400,
  ProfileUpdateStatus401,
  ProfileUpdateStatus403,
  ProfileUpdateStatus404,
  ProfileUpdateStatus500,
  ProfileUpdateStatus501,
} from "../../models/profile/ProfileUpdate.ts";

function getProfileUpdateUrl() {
  const res = { method: "PUT", url: `/api/account/my-profile` as const };

  return res;
}

/**
 * {@link /api/account/my-profile}
 */
export async function profileUpdate(
  data?: ProfileUpdateData,
  config: Partial<RequestConfig<ProfileUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ProfileUpdateStatus200,
    ResponseErrorConfig<
      | ProfileUpdateStatus400
      | ProfileUpdateStatus401
      | ProfileUpdateStatus403
      | ProfileUpdateStatus404
      | ProfileUpdateStatus500
      | ProfileUpdateStatus501
    >,
    ProfileUpdateData
  >({
    method: "PUT",
    url: getProfileUpdateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
