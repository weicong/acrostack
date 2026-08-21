/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { QuizCreateOptions, QuizCreateResponses } from "../../models/quiz/QuizCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/quiz}
 */
export function quizCreate<ThrowOnError extends boolean = true>(
  options: Options<QuizCreateOptions, ThrowOnError>,
): Promise<RequestResult<QuizCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/quiz",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuizCreateResponses, ThrowOnError>>;
}
