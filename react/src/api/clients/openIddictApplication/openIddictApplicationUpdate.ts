/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictApplicationUpdatePathId,
  OpenIddictApplicationUpdateData,
  OpenIddictApplicationUpdateStatus200,
  OpenIddictApplicationUpdateStatus400,
  OpenIddictApplicationUpdateStatus401,
  OpenIddictApplicationUpdateStatus403,
  OpenIddictApplicationUpdateStatus404,
  OpenIddictApplicationUpdateStatus500,
  OpenIddictApplicationUpdateStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationUpdate.ts";

function getOpenIddictApplicationUpdateUrl(id: OpenIddictApplicationUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/open-iddict-application/${id}` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export async function openIddictApplicationUpdate(
  id: OpenIddictApplicationUpdatePathId,
  data?: OpenIddictApplicationUpdateData,
  config: Partial<RequestConfig<OpenIddictApplicationUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    OpenIddictApplicationUpdateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationUpdateStatus400
      | OpenIddictApplicationUpdateStatus401
      | OpenIddictApplicationUpdateStatus403
      | OpenIddictApplicationUpdateStatus404
      | OpenIddictApplicationUpdateStatus500
      | OpenIddictApplicationUpdateStatus501
    >,
    OpenIddictApplicationUpdateData
  >({
    method: "PUT",
    url: getOpenIddictApplicationUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
