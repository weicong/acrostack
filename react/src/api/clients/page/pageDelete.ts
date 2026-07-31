/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageDeletePathId,
  PageDeleteStatus200,
  PageDeleteStatus204,
  PageDeleteStatus400,
  PageDeleteStatus401,
  PageDeleteStatus403,
  PageDeleteStatus404,
  PageDeleteStatus500,
  PageDeleteStatus501,
} from "../../models/page/PageDelete.ts";

function getPageDeleteUrl(id: PageDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/page/${id}` as const };

  return res;
}

/**
 * {@link /api/app/page/:id}
 */
export async function pageDelete(
  id: PageDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageDeleteStatus200 | PageDeleteStatus204,
    ResponseErrorConfig<
      | PageDeleteStatus400
      | PageDeleteStatus401
      | PageDeleteStatus403
      | PageDeleteStatus404
      | PageDeleteStatus500
      | PageDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getPageDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
