/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AbpApplicationConfigurationGetQueryIncludeLocalizationResources,
  AbpApplicationConfigurationGetStatus200,
  AbpApplicationConfigurationGetStatus400,
  AbpApplicationConfigurationGetStatus401,
  AbpApplicationConfigurationGetStatus403,
  AbpApplicationConfigurationGetStatus404,
  AbpApplicationConfigurationGetStatus500,
  AbpApplicationConfigurationGetStatus501,
} from "../../models/abpApplicationConfiguration/AbpApplicationConfigurationGet.ts";

function getAbpApplicationConfigurationGetUrl() {
  const res = { method: "GET", url: `/api/abp/application-configuration` as const };

  return res;
}

/**
 * {@link /api/abp/application-configuration}
 */
export async function abpApplicationConfigurationGet(
  params?: {
    IncludeLocalizationResources?: AbpApplicationConfigurationGetQueryIncludeLocalizationResources;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AbpApplicationConfigurationGetStatus200,
    ResponseErrorConfig<
      | AbpApplicationConfigurationGetStatus400
      | AbpApplicationConfigurationGetStatus401
      | AbpApplicationConfigurationGetStatus403
      | AbpApplicationConfigurationGetStatus404
      | AbpApplicationConfigurationGetStatus500
      | AbpApplicationConfigurationGetStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getAbpApplicationConfigurationGetUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
