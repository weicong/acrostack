/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AbpApplicationLocalizationGetQueryCultureName,
  AbpApplicationLocalizationGetQueryOnlyDynamics,
  AbpApplicationLocalizationGetStatus200,
  AbpApplicationLocalizationGetStatus400,
  AbpApplicationLocalizationGetStatus401,
  AbpApplicationLocalizationGetStatus403,
  AbpApplicationLocalizationGetStatus404,
  AbpApplicationLocalizationGetStatus500,
  AbpApplicationLocalizationGetStatus501,
} from "../../models/abpApplicationLocalization/AbpApplicationLocalizationGet.ts";

function getAbpApplicationLocalizationGetUrl() {
  const res = { method: "GET", url: `/api/abp/application-localization` as const };

  return res;
}

/**
 * {@link /api/abp/application-localization}
 */
export async function abpApplicationLocalizationGet(
  params: {
    CultureName: AbpApplicationLocalizationGetQueryCultureName;
    OnlyDynamics?: AbpApplicationLocalizationGetQueryOnlyDynamics;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AbpApplicationLocalizationGetStatus200,
    ResponseErrorConfig<
      | AbpApplicationLocalizationGetStatus400
      | AbpApplicationLocalizationGetStatus401
      | AbpApplicationLocalizationGetStatus403
      | AbpApplicationLocalizationGetStatus404
      | AbpApplicationLocalizationGetStatus500
      | AbpApplicationLocalizationGetStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getAbpApplicationLocalizationGetUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
