/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionFinishOptions,
  ClassSessionFinishResponses,
} from "../../models/classSession/ClassSessionFinish";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/finish}
 */
export function classSessionFinish<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionFinishOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionFinishResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/finish",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionFinishResponses, ThrowOnError>>;
}
