/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  QuestionCreateOptions,
  QuestionCreateResponses,
} from "../../models/question/QuestionCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/question}
 */
export function questionCreate<ThrowOnError extends boolean = true>(
  options: Options<QuestionCreateOptions, ThrowOnError>,
): Promise<RequestResult<QuestionCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/question",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuestionCreateResponses, ThrowOnError>>;
}
