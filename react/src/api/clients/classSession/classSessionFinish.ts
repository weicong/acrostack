/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionFinishOptions,
  ClassSessionFinishResponses,
} from "../../models/classSession/ClassSessionFinish";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/finish}
 */
export function classSessionFinish<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionFinishOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionFinishResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session/{id}/finish",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionFinishResponses, ThrowOnError>>,
  );
}
