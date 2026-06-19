/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FeaturesUpdateQueryProviderName,
  FeaturesUpdateQueryProviderKey,
  FeaturesUpdateData,
  FeaturesUpdateStatus200,
  FeaturesUpdateStatus204,
  FeaturesUpdateStatus400,
  FeaturesUpdateStatus401,
  FeaturesUpdateStatus403,
  FeaturesUpdateStatus404,
  FeaturesUpdateStatus500,
  FeaturesUpdateStatus501,
} from "../../models/features/FeaturesUpdate.ts";

function getFeaturesUpdateUrl() {
  const res = { method: "PUT", url: `/api/feature-management/features` as const };

  return res;
}

/**
 * {@link /api/feature-management/features}
 */
export async function featuresUpdate(
  data?: FeaturesUpdateData,
  params?: {
    providerName?: FeaturesUpdateQueryProviderName;
    providerKey?: FeaturesUpdateQueryProviderKey;
  },
  config: Partial<RequestConfig<FeaturesUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    FeaturesUpdateStatus200 | FeaturesUpdateStatus204,
    ResponseErrorConfig<
      | FeaturesUpdateStatus400
      | FeaturesUpdateStatus401
      | FeaturesUpdateStatus403
      | FeaturesUpdateStatus404
      | FeaturesUpdateStatus500
      | FeaturesUpdateStatus501
    >,
    FeaturesUpdateData
  >({
    method: "PUT",
    url: getFeaturesUpdateUrl().url.toString(),
    params,
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
