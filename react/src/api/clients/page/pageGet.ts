/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageGetPathId,
  PageGetStatus200,
  PageGetStatus400,
  PageGetStatus401,
  PageGetStatus403,
  PageGetStatus404,
  PageGetStatus500,
  PageGetStatus501,
} from "../../models/page/PageGet.ts";

function getPageGetUrl(id: PageGetPathId) {
  const res = { method: "GET", url: `/api/app/page/${id}` as const };

  return res;
}

/**
 * {@link /api/app/page/:id}
 */
export async function pageGet(
  id: PageGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageGetStatus200,
    ResponseErrorConfig<
      | PageGetStatus400
      | PageGetStatus401
      | PageGetStatus403
      | PageGetStatus404
      | PageGetStatus500
      | PageGetStatus501
    >,
    unknown
  >({ method: "GET", url: getPageGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
