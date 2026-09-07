/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { QuizGetListOptions, QuizGetListResponses } from "../../models/quiz/QuizGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/quiz}
 */
export function quizGetList<ThrowOnError extends boolean = true>(
  options: Options<QuizGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<QuizGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/quiz",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuizGetListResponses, ThrowOnError>>,
  );
}
