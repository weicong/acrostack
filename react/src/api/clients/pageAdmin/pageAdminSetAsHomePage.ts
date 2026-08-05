/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageAdminSetAsHomePagePathId,
  PageAdminSetAsHomePageStatus200,
  PageAdminSetAsHomePageStatus204,
  PageAdminSetAsHomePageStatus400,
  PageAdminSetAsHomePageStatus401,
  PageAdminSetAsHomePageStatus403,
  PageAdminSetAsHomePageStatus404,
  PageAdminSetAsHomePageStatus500,
  PageAdminSetAsHomePageStatus501,
} from "../../models/pageAdmin/PageAdminSetAsHomePage.ts";

function getPageAdminSetAsHomePageUrl(id: PageAdminSetAsHomePagePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/pages/setashomepage/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/pages/setashomepage/:id}
 */
export async function pageAdminSetAsHomePage(
  id: PageAdminSetAsHomePagePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageAdminSetAsHomePageStatus200 | PageAdminSetAsHomePageStatus204,
    ResponseErrorConfig<
      | PageAdminSetAsHomePageStatus400
      | PageAdminSetAsHomePageStatus401
      | PageAdminSetAsHomePageStatus403
      | PageAdminSetAsHomePageStatus404
      | PageAdminSetAsHomePageStatus500
      | PageAdminSetAsHomePageStatus501
    >,
    unknown
  >({ method: "PUT", url: getPageAdminSetAsHomePageUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
