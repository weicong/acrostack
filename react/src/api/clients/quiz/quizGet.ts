/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { QuizGetOptions, QuizGetResponses } from "../../models/quiz/QuizGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/quiz/:id}
 */
export function quizGet<ThrowOnError extends boolean = true>(
  options: Options<QuizGetOptions, ThrowOnError>,
): Promise<RequestResult<QuizGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/quiz/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuizGetResponses, ThrowOnError>>;
}
