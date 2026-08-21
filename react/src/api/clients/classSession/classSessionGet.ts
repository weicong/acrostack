/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionGetOptions,
  ClassSessionGetResponses,
} from "../../models/classSession/ClassSessionGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id}
 */
export function classSessionGet<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionGetOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/class-session/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionGetResponses, ThrowOnError>>;
}
