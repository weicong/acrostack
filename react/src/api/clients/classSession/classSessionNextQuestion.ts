/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionNextQuestionOptions,
  ClassSessionNextQuestionResponses,
} from "../../models/classSession/ClassSessionNextQuestion";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/next-question}
 */
export function classSessionNextQuestion<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionNextQuestionOptions, ThrowOnError>,
): Unwrappable<RequestResult<ClassSessionNextQuestionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/class-session/{id}/next-question",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ClassSessionNextQuestionResponses, ThrowOnError>>,
  );
}
