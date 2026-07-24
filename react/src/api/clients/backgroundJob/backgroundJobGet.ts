/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BackgroundJobGetPathId,
  BackgroundJobGetStatus200,
  BackgroundJobGetStatus400,
  BackgroundJobGetStatus401,
  BackgroundJobGetStatus403,
  BackgroundJobGetStatus404,
  BackgroundJobGetStatus500,
  BackgroundJobGetStatus501,
} from "../../models/backgroundJob/BackgroundJobGet.ts";

function getBackgroundJobGetUrl(id: BackgroundJobGetPathId) {
  const res = { method: "GET", url: `/api/app/background-job/${id}` as const };

  return res;
}

/**
 * {@link /api/app/background-job/:id}
 */
export async function backgroundJobGet(
  id: BackgroundJobGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BackgroundJobGetStatus200,
    ResponseErrorConfig<
      | BackgroundJobGetStatus400
      | BackgroundJobGetStatus401
      | BackgroundJobGetStatus403
      | BackgroundJobGetStatus404
      | BackgroundJobGetStatus500
      | BackgroundJobGetStatus501
    >,
    unknown
  >({ method: "GET", url: getBackgroundJobGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
