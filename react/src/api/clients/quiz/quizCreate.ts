/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { QuizCreateOptions, QuizCreateResponses } from "../../models/quiz/QuizCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/quiz}
 */
export function quizCreate<ThrowOnError extends boolean = true>(
  options: Options<QuizCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuizCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/quiz",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuizCreateResponses, ThrowOnError>>,
  );
}
