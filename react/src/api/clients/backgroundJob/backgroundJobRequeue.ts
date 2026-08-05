/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BackgroundJobRequeuePathId,
  BackgroundJobRequeueStatus200,
  BackgroundJobRequeueStatus204,
  BackgroundJobRequeueStatus400,
  BackgroundJobRequeueStatus401,
  BackgroundJobRequeueStatus403,
  BackgroundJobRequeueStatus404,
  BackgroundJobRequeueStatus500,
  BackgroundJobRequeueStatus501,
} from "../../models/backgroundJob/BackgroundJobRequeue.ts";

function getBackgroundJobRequeueUrl(id: BackgroundJobRequeuePathId) {
  const res = { method: "POST", url: `/api/app/background-job/${id}/requeue` as const };

  return res;
}

/**
 * {@link /api/app/background-job/:id/requeue}
 */
export async function backgroundJobRequeue(
  id: BackgroundJobRequeuePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BackgroundJobRequeueStatus200 | BackgroundJobRequeueStatus204,
    ResponseErrorConfig<
      | BackgroundJobRequeueStatus400
      | BackgroundJobRequeueStatus401
      | BackgroundJobRequeueStatus403
      | BackgroundJobRequeueStatus404
      | BackgroundJobRequeueStatus500
      | BackgroundJobRequeueStatus501
    >,
    unknown
  >({ method: "POST", url: getBackgroundJobRequeueUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
