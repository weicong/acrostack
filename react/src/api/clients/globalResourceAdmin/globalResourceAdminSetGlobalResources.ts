/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  GlobalResourceAdminSetGlobalResourcesData,
  GlobalResourceAdminSetGlobalResourcesStatus200,
  GlobalResourceAdminSetGlobalResourcesStatus204,
  GlobalResourceAdminSetGlobalResourcesStatus400,
  GlobalResourceAdminSetGlobalResourcesStatus401,
  GlobalResourceAdminSetGlobalResourcesStatus403,
  GlobalResourceAdminSetGlobalResourcesStatus404,
  GlobalResourceAdminSetGlobalResourcesStatus500,
  GlobalResourceAdminSetGlobalResourcesStatus501,
} from "../../models/globalResourceAdmin/GlobalResourceAdminSetGlobalResources.ts";

function getGlobalResourceAdminSetGlobalResourcesUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/global-resources` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export async function globalResourceAdminSetGlobalResources(
  data?: GlobalResourceAdminSetGlobalResourcesData,
  config: Partial<RequestConfig<GlobalResourceAdminSetGlobalResourcesData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    GlobalResourceAdminSetGlobalResourcesStatus200 | GlobalResourceAdminSetGlobalResourcesStatus204,
    ResponseErrorConfig<
      | GlobalResourceAdminSetGlobalResourcesStatus400
      | GlobalResourceAdminSetGlobalResourcesStatus401
      | GlobalResourceAdminSetGlobalResourcesStatus403
      | GlobalResourceAdminSetGlobalResourcesStatus404
      | GlobalResourceAdminSetGlobalResourcesStatus500
      | GlobalResourceAdminSetGlobalResourcesStatus501
    >,
    GlobalResourceAdminSetGlobalResourcesData
  >({
    method: "POST",
    url: getGlobalResourceAdminSetGlobalResourcesUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
