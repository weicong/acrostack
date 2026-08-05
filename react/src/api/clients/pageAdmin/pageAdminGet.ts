/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageAdminGetPathId,
  PageAdminGetStatus200,
  PageAdminGetStatus400,
  PageAdminGetStatus401,
  PageAdminGetStatus403,
  PageAdminGetStatus404,
  PageAdminGetStatus500,
  PageAdminGetStatus501,
} from "../../models/pageAdmin/PageAdminGet.ts";

function getPageAdminGetUrl(id: PageAdminGetPathId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/pages/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export async function pageAdminGet(
  id: PageAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageAdminGetStatus200,
    ResponseErrorConfig<
      | PageAdminGetStatus400
      | PageAdminGetStatus401
      | PageAdminGetStatus403
      | PageAdminGetStatus404
      | PageAdminGetStatus500
      | PageAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getPageAdminGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
