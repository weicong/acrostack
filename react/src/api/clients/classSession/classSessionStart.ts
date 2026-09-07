/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionStartOptions,
  ClassSessionStartResponses,
} from "../../models/classSession/ClassSessionStart";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/start}
 */
export function classSessionStart<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionStartOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionStartResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session/{id}/start",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionStartResponses, ThrowOnError>>,
  );
}
