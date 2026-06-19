/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  DynamicClaimsRefreshStatus200,
  DynamicClaimsRefreshStatus204,
  DynamicClaimsRefreshStatus400,
  DynamicClaimsRefreshStatus401,
  DynamicClaimsRefreshStatus403,
  DynamicClaimsRefreshStatus404,
  DynamicClaimsRefreshStatus500,
  DynamicClaimsRefreshStatus501,
} from "../../models/dynamicClaims/DynamicClaimsRefresh.ts";

function getDynamicClaimsRefreshUrl() {
  const res = { method: "POST", url: `/api/account/dynamic-claims/refresh` as const };

  return res;
}

/**
 * {@link /api/account/dynamic-claims/refresh}
 */
export async function dynamicClaimsRefresh(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    DynamicClaimsRefreshStatus200 | DynamicClaimsRefreshStatus204,
    ResponseErrorConfig<
      | DynamicClaimsRefreshStatus400
      | DynamicClaimsRefreshStatus401
      | DynamicClaimsRefreshStatus403
      | DynamicClaimsRefreshStatus404
      | DynamicClaimsRefreshStatus500
      | DynamicClaimsRefreshStatus501
    >,
    unknown
  >({ method: "POST", url: getDynamicClaimsRefreshUrl().url.toString(), ...requestConfig });

  return res.data;
}
