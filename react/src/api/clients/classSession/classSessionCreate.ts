/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionCreateOptions,
  ClassSessionCreateResponses,
} from "../../models/classSession/ClassSessionCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session}
 */
export function classSessionCreate<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionCreateResponses, ThrowOnError>>,
  );
}
