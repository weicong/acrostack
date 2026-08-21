/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { QuizUpdateOptions, QuizUpdateResponses } from "../../models/quiz/QuizUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/quiz/:id}
 */
export function quizUpdate<ThrowOnError extends boolean = true>(
  options: Options<QuizUpdateOptions, ThrowOnError>,
): Promise<RequestResult<QuizUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/app/quiz/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuizUpdateResponses, ThrowOnError>>;
}
