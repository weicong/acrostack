/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BackgroundJobAbandonPathId,
  BackgroundJobAbandonStatus200,
  BackgroundJobAbandonStatus204,
  BackgroundJobAbandonStatus400,
  BackgroundJobAbandonStatus401,
  BackgroundJobAbandonStatus403,
  BackgroundJobAbandonStatus404,
  BackgroundJobAbandonStatus500,
  BackgroundJobAbandonStatus501,
} from "../../models/backgroundJob/BackgroundJobAbandon.ts";

function getBackgroundJobAbandonUrl(id: BackgroundJobAbandonPathId) {
  const res = { method: "POST", url: `/api/app/background-job/${id}/abandon` as const };

  return res;
}

/**
 * {@link /api/app/background-job/:id/abandon}
 */
export async function backgroundJobAbandon(
  id: BackgroundJobAbandonPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BackgroundJobAbandonStatus200 | BackgroundJobAbandonStatus204,
    ResponseErrorConfig<
      | BackgroundJobAbandonStatus400
      | BackgroundJobAbandonStatus401
      | BackgroundJobAbandonStatus403
      | BackgroundJobAbandonStatus404
      | BackgroundJobAbandonStatus500
      | BackgroundJobAbandonStatus501
    >,
    unknown
  >({ method: "POST", url: getBackgroundJobAbandonUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
