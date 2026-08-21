/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { QuizGetListOptions, QuizGetListResponses } from "../../models/quiz/QuizGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/quiz}
 */
export function quizGetList<ThrowOnError extends boolean = true>(
  options: Options<QuizGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<QuizGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/quiz",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuizGetListResponses, ThrowOnError>>;
}
