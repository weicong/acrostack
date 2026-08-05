/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageAdminDeletePathId,
  PageAdminDeleteStatus200,
  PageAdminDeleteStatus204,
  PageAdminDeleteStatus400,
  PageAdminDeleteStatus401,
  PageAdminDeleteStatus403,
  PageAdminDeleteStatus404,
  PageAdminDeleteStatus500,
  PageAdminDeleteStatus501,
} from "../../models/pageAdmin/PageAdminDelete.ts";

function getPageAdminDeleteUrl(id: PageAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/pages/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export async function pageAdminDelete(
  id: PageAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageAdminDeleteStatus200 | PageAdminDeleteStatus204,
    ResponseErrorConfig<
      | PageAdminDeleteStatus400
      | PageAdminDeleteStatus401
      | PageAdminDeleteStatus403
      | PageAdminDeleteStatus404
      | PageAdminDeleteStatus500
      | PageAdminDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getPageAdminDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
