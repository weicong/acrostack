/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionCreatePresentationTokenOptions,
  ClassSessionCreatePresentationTokenResponses,
} from "../../models/classSession/ClassSessionCreatePresentationToken";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/presentation-token}
 */
export function classSessionCreatePresentationToken<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionCreatePresentationTokenOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionCreatePresentationTokenResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session/{id}/presentation-token",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionCreatePresentationTokenResponses, ThrowOnError>>,
  );
}
