/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageAdminCreateData,
  PageAdminCreateStatus200,
  PageAdminCreateStatus400,
  PageAdminCreateStatus401,
  PageAdminCreateStatus403,
  PageAdminCreateStatus404,
  PageAdminCreateStatus500,
  PageAdminCreateStatus501,
} from "../../models/pageAdmin/PageAdminCreate.ts";

function getPageAdminCreateUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/pages` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/pages}
 */
export async function pageAdminCreate(
  data?: PageAdminCreateData,
  config: Partial<RequestConfig<PageAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    PageAdminCreateStatus200,
    ResponseErrorConfig<
      | PageAdminCreateStatus400
      | PageAdminCreateStatus401
      | PageAdminCreateStatus403
      | PageAdminCreateStatus404
      | PageAdminCreateStatus500
      | PageAdminCreateStatus501
    >,
    PageAdminCreateData
  >({
    method: "POST",
    url: getPageAdminCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
