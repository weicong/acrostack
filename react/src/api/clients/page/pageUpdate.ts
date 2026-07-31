/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageUpdatePathId,
  PageUpdateData,
  PageUpdateStatus200,
  PageUpdateStatus400,
  PageUpdateStatus401,
  PageUpdateStatus403,
  PageUpdateStatus404,
  PageUpdateStatus500,
  PageUpdateStatus501,
} from "../../models/page/PageUpdate.ts";

function getPageUpdateUrl(id: PageUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/page/${id}` as const };

  return res;
}

/**
 * {@link /api/app/page/:id}
 */
export async function pageUpdate(
  id: PageUpdatePathId,
  data?: PageUpdateData,
  config: Partial<RequestConfig<PageUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PageUpdateStatus200,
    ResponseErrorConfig<
      | PageUpdateStatus400
      | PageUpdateStatus401
      | PageUpdateStatus403
      | PageUpdateStatus404
      | PageUpdateStatus500
      | PageUpdateStatus501
    >,
    PageUpdateData
  >({
    method: "PUT",
    url: getPageUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
