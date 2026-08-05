/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictScopeCreateData,
  OpenIddictScopeCreateStatus200,
  OpenIddictScopeCreateStatus400,
  OpenIddictScopeCreateStatus401,
  OpenIddictScopeCreateStatus403,
  OpenIddictScopeCreateStatus404,
  OpenIddictScopeCreateStatus500,
  OpenIddictScopeCreateStatus501,
} from "../../models/openIddictScope/OpenIddictScopeCreate.ts";

function getOpenIddictScopeCreateUrl() {
  const res = { method: "POST", url: `/api/app/open-iddict-scope` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-scope}
 */
export async function openIddictScopeCreate(
  data?: OpenIddictScopeCreateData,
  config: Partial<RequestConfig<OpenIddictScopeCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    OpenIddictScopeCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeCreateStatus400
      | OpenIddictScopeCreateStatus401
      | OpenIddictScopeCreateStatus403
      | OpenIddictScopeCreateStatus404
      | OpenIddictScopeCreateStatus500
      | OpenIddictScopeCreateStatus501
    >,
    OpenIddictScopeCreateData
  >({
    method: "POST",
    url: getOpenIddictScopeCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
