/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionStartQuestionOptions,
  ClassSessionStartQuestionResponses,
} from "../../models/classSession/ClassSessionStartQuestion";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/start-question/:questionId}
 */
export function classSessionStartQuestion<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionStartQuestionOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionStartQuestionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session/{id}/start-question/{questionId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionStartQuestionResponses, ThrowOnError>>,
  );
}
