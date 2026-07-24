/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BackgroundJobDeletePathId,
  BackgroundJobDeleteStatus200,
  BackgroundJobDeleteStatus204,
  BackgroundJobDeleteStatus400,
  BackgroundJobDeleteStatus401,
  BackgroundJobDeleteStatus403,
  BackgroundJobDeleteStatus404,
  BackgroundJobDeleteStatus500,
  BackgroundJobDeleteStatus501,
} from "../../models/backgroundJob/BackgroundJobDelete.ts";

function getBackgroundJobDeleteUrl(id: BackgroundJobDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/background-job/${id}` as const };

  return res;
}

/**
 * {@link /api/app/background-job/:id}
 */
export async function backgroundJobDelete(
  id: BackgroundJobDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BackgroundJobDeleteStatus200 | BackgroundJobDeleteStatus204,
    ResponseErrorConfig<
      | BackgroundJobDeleteStatus400
      | BackgroundJobDeleteStatus401
      | BackgroundJobDeleteStatus403
      | BackgroundJobDeleteStatus404
      | BackgroundJobDeleteStatus500
      | BackgroundJobDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBackgroundJobDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
