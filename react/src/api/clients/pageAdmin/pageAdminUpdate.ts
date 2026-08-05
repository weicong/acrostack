/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageAdminUpdatePathId,
  PageAdminUpdateData,
  PageAdminUpdateStatus200,
  PageAdminUpdateStatus400,
  PageAdminUpdateStatus401,
  PageAdminUpdateStatus403,
  PageAdminUpdateStatus404,
  PageAdminUpdateStatus500,
  PageAdminUpdateStatus501,
} from "../../models/pageAdmin/PageAdminUpdate.ts";

function getPageAdminUpdateUrl(id: PageAdminUpdatePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/pages/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export async function pageAdminUpdate(
  id: PageAdminUpdatePathId,
  data?: PageAdminUpdateData,
  config: Partial<RequestConfig<PageAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PageAdminUpdateStatus200,
    ResponseErrorConfig<
      | PageAdminUpdateStatus400
      | PageAdminUpdateStatus401
      | PageAdminUpdateStatus403
      | PageAdminUpdateStatus404
      | PageAdminUpdateStatus500
      | PageAdminUpdateStatus501
    >,
    PageAdminUpdateData
  >({
    method: "PUT",
    url: getPageAdminUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
