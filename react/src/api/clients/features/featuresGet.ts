/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FeaturesGetQueryProviderName,
  FeaturesGetQueryProviderKey,
  FeaturesGetStatus200,
  FeaturesGetStatus400,
  FeaturesGetStatus401,
  FeaturesGetStatus403,
  FeaturesGetStatus404,
  FeaturesGetStatus500,
  FeaturesGetStatus501,
} from "../../models/features/FeaturesGet.ts";

function getFeaturesGetUrl() {
  const res = { method: "GET", url: `/api/feature-management/features` as const };

  return res;
}

/**
 * {@link /api/feature-management/features}
 */
export async function featuresGet(
  params?: {
    providerName?: FeaturesGetQueryProviderName;
    providerKey?: FeaturesGetQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FeaturesGetStatus200,
    ResponseErrorConfig<
      | FeaturesGetStatus400
      | FeaturesGetStatus401
      | FeaturesGetStatus403
      | FeaturesGetStatus404
      | FeaturesGetStatus500
      | FeaturesGetStatus501
    >,
    unknown
  >({ method: "GET", url: getFeaturesGetUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
