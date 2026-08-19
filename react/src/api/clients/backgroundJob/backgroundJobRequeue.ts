/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BackgroundJobRequeueOptions,
  BackgroundJobRequeueResponses,
} from "../../models/backgroundJob/BackgroundJobRequeue";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/background-job/:id/requeue}
 */
export function backgroundJobRequeue<ThrowOnError extends boolean = true>(
  options: Options<BackgroundJobRequeueOptions, ThrowOnError>,
): Promise<RequestResult<BackgroundJobRequeueResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/background-job/{id}/requeue",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BackgroundJobRequeueResponses, ThrowOnError>>;
}
