/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AbpApiDefinitionGetQueryIncludeTypes,
  AbpApiDefinitionGetQueryIncludeDescriptions,
  AbpApiDefinitionGetStatus200,
  AbpApiDefinitionGetStatus400,
  AbpApiDefinitionGetStatus401,
  AbpApiDefinitionGetStatus403,
  AbpApiDefinitionGetStatus404,
  AbpApiDefinitionGetStatus500,
  AbpApiDefinitionGetStatus501,
} from "../../models/abpApiDefinition/AbpApiDefinitionGet.ts";

function getAbpApiDefinitionGetUrl() {
  const res = { method: "GET", url: `/api/abp/api-definition` as const };

  return res;
}

/**
 * {@link /api/abp/api-definition}
 */
export async function abpApiDefinitionGet(
  params?: {
    IncludeTypes?: AbpApiDefinitionGetQueryIncludeTypes;
    IncludeDescriptions?: AbpApiDefinitionGetQueryIncludeDescriptions;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AbpApiDefinitionGetStatus200,
    ResponseErrorConfig<
      | AbpApiDefinitionGetStatus400
      | AbpApiDefinitionGetStatus401
      | AbpApiDefinitionGetStatus403
      | AbpApiDefinitionGetStatus404
      | AbpApiDefinitionGetStatus500
      | AbpApiDefinitionGetStatus501
    >,
    unknown
  >({ method: "GET", url: getAbpApiDefinitionGetUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
