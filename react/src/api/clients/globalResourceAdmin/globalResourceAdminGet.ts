/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  GlobalResourceAdminGetStatus200,
  GlobalResourceAdminGetStatus400,
  GlobalResourceAdminGetStatus401,
  GlobalResourceAdminGetStatus403,
  GlobalResourceAdminGetStatus404,
  GlobalResourceAdminGetStatus500,
  GlobalResourceAdminGetStatus501,
} from "../../models/globalResourceAdmin/GlobalResourceAdminGet.ts";

function getGlobalResourceAdminGetUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/global-resources` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export async function globalResourceAdminGet(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GlobalResourceAdminGetStatus200,
    ResponseErrorConfig<
      | GlobalResourceAdminGetStatus400
      | GlobalResourceAdminGetStatus401
      | GlobalResourceAdminGetStatus403
      | GlobalResourceAdminGetStatus404
      | GlobalResourceAdminGetStatus500
      | GlobalResourceAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getGlobalResourceAdminGetUrl().url.toString(), ...requestConfig });

  return res.data;
}
