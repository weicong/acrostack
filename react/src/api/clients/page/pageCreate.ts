/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageCreateData,
  PageCreateStatus200,
  PageCreateStatus400,
  PageCreateStatus401,
  PageCreateStatus403,
  PageCreateStatus404,
  PageCreateStatus500,
  PageCreateStatus501,
} from "../../models/page/PageCreate.ts";

function getPageCreateUrl() {
  const res = { method: "POST", url: `/api/app/page` as const };

  return res;
}

/**
 * {@link /api/app/page}
 */
export async function pageCreate(
  data?: PageCreateData,
  config: Partial<RequestConfig<PageCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PageCreateStatus200,
    ResponseErrorConfig<
      | PageCreateStatus400
      | PageCreateStatus401
      | PageCreateStatus403
      | PageCreateStatus404
      | PageCreateStatus500
      | PageCreateStatus501
    >,
    PageCreateData
  >({
    method: "POST",
    url: getPageCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
