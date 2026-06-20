/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AppUserDeletePathId,
  AppUserDeleteStatus200,
  AppUserDeleteStatus204,
  AppUserDeleteStatus400,
  AppUserDeleteStatus401,
  AppUserDeleteStatus403,
  AppUserDeleteStatus404,
  AppUserDeleteStatus500,
  AppUserDeleteStatus501,
} from "../../models/appUser/AppUserDelete.ts";

function getAppUserDeleteUrl(id: AppUserDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/app-user/${id}` as const };

  return res;
}

/**
 * {@link /api/app/app-user/:id}
 */
export async function appUserDelete(
  id: AppUserDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AppUserDeleteStatus200 | AppUserDeleteStatus204,
    ResponseErrorConfig<
      | AppUserDeleteStatus400
      | AppUserDeleteStatus401
      | AppUserDeleteStatus403
      | AppUserDeleteStatus404
      | AppUserDeleteStatus500
      | AppUserDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getAppUserDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
