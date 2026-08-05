/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictApplicationCreateData,
  OpenIddictApplicationCreateStatus200,
  OpenIddictApplicationCreateStatus400,
  OpenIddictApplicationCreateStatus401,
  OpenIddictApplicationCreateStatus403,
  OpenIddictApplicationCreateStatus404,
  OpenIddictApplicationCreateStatus500,
  OpenIddictApplicationCreateStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationCreate.ts";

function getOpenIddictApplicationCreateUrl() {
  const res = { method: "POST", url: `/api/app/open-iddict-application` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-application}
 */
export async function openIddictApplicationCreate(
  data?: OpenIddictApplicationCreateData,
  config: Partial<RequestConfig<OpenIddictApplicationCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    OpenIddictApplicationCreateStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationCreateStatus400
      | OpenIddictApplicationCreateStatus401
      | OpenIddictApplicationCreateStatus403
      | OpenIddictApplicationCreateStatus404
      | OpenIddictApplicationCreateStatus500
      | OpenIddictApplicationCreateStatus501
    >,
    OpenIddictApplicationCreateData
  >({
    method: "POST",
    url: getOpenIddictApplicationCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
