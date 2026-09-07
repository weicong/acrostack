/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { QuizDeleteOptions, QuizDeleteResponses } from "../../models/quiz/QuizDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/quiz/:id}
 */
export function quizDelete<ThrowOnError extends boolean = true>(
  options: Options<QuizDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuizDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/quiz/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuizDeleteResponses, ThrowOnError>>,
  );
}
