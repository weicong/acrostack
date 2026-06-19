/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FeaturesDeleteQueryProviderName,
  FeaturesDeleteQueryProviderKey,
  FeaturesDeleteStatus200,
  FeaturesDeleteStatus204,
  FeaturesDeleteStatus400,
  FeaturesDeleteStatus401,
  FeaturesDeleteStatus403,
  FeaturesDeleteStatus404,
  FeaturesDeleteStatus500,
  FeaturesDeleteStatus501,
} from "../../models/features/FeaturesDelete.ts";

function getFeaturesDeleteUrl() {
  const res = { method: "DELETE", url: `/api/feature-management/features` as const };

  return res;
}

/**
 * {@link /api/feature-management/features}
 */
export async function featuresDelete(
  params?: {
    providerName?: FeaturesDeleteQueryProviderName;
    providerKey?: FeaturesDeleteQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FeaturesDeleteStatus200 | FeaturesDeleteStatus204,
    ResponseErrorConfig<
      | FeaturesDeleteStatus400
      | FeaturesDeleteStatus401
      | FeaturesDeleteStatus403
      | FeaturesDeleteStatus404
      | FeaturesDeleteStatus500
      | FeaturesDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getFeaturesDeleteUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
