/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionGetListOptions,
  ClassSessionGetListResponses,
} from "../../models/classSession/ClassSessionGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session}
 */
export function classSessionGetList<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<ClassSessionGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/class-session",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionGetListResponses, ThrowOnError>>;
}
