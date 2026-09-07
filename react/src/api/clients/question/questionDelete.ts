/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  QuestionDeleteOptions,
  QuestionDeleteResponses,
} from "../../models/question/QuestionDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/question/:id}
 */
export function questionDelete<ThrowOnError extends boolean = true>(
  options: Options<QuestionDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuestionDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/question/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuestionDeleteResponses, ThrowOnError>>,
  );
}
