/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { QuizGetOptions, QuizGetResponses } from "../../models/quiz/QuizGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/quiz/:id}
 */
export function quizGet<ThrowOnError extends boolean = true>(
  options: Options<QuizGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuizGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/quiz/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuizGetResponses, ThrowOnError>>,
  );
}
