/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  QuestionCreateOptions,
  QuestionCreateResponses,
} from "../../models/question/QuestionCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/question}
 */
export function questionCreate<ThrowOnError extends boolean = true>(
  options: Options<QuestionCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuestionCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/question",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuestionCreateResponses, ThrowOnError>>,
  );
}
