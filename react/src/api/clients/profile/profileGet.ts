/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ProfileGetStatus200,
  ProfileGetStatus400,
  ProfileGetStatus401,
  ProfileGetStatus403,
  ProfileGetStatus404,
  ProfileGetStatus500,
  ProfileGetStatus501,
} from "../../models/profile/ProfileGet.ts";

function getProfileGetUrl() {
  const res = { method: "GET", url: `/api/account/my-profile` as const };

  return res;
}

/**
 * {@link /api/account/my-profile}
 */
export async function profileGet(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ProfileGetStatus200,
    ResponseErrorConfig<
      | ProfileGetStatus400
      | ProfileGetStatus401
      | ProfileGetStatus403
      | ProfileGetStatus404
      | ProfileGetStatus500
      | ProfileGetStatus501
    >,
    unknown
  >({ method: "GET", url: getProfileGetUrl().url.toString(), ...requestConfig });

  return res.data;
}
