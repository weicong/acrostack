/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictScopeUpdatePathId,
  OpenIddictScopeUpdateData,
  OpenIddictScopeUpdateStatus200,
  OpenIddictScopeUpdateStatus400,
  OpenIddictScopeUpdateStatus401,
  OpenIddictScopeUpdateStatus403,
  OpenIddictScopeUpdateStatus404,
  OpenIddictScopeUpdateStatus500,
  OpenIddictScopeUpdateStatus501,
} from "../../models/openIddictScope/OpenIddictScopeUpdate.ts";

function getOpenIddictScopeUpdateUrl(id: OpenIddictScopeUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/open-iddict-scope/${id}` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export async function openIddictScopeUpdate(
  id: OpenIddictScopeUpdatePathId,
  data?: OpenIddictScopeUpdateData,
  config: Partial<RequestConfig<OpenIddictScopeUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    OpenIddictScopeUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeUpdateStatus400
      | OpenIddictScopeUpdateStatus401
      | OpenIddictScopeUpdateStatus403
      | OpenIddictScopeUpdateStatus404
      | OpenIddictScopeUpdateStatus500
      | OpenIddictScopeUpdateStatus501
    >,
    OpenIddictScopeUpdateData
  >({
    method: "PUT",
    url: getOpenIddictScopeUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
