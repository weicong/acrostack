/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionRestartOptions,
  ClassSessionRestartResponses,
} from "../../models/classSession/ClassSessionRestart";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/restart}
 */
export function classSessionRestart<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionRestartOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionRestartResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/restart",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionRestartResponses, ThrowOnError>>;
}
