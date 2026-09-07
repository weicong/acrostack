/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  QuestionUpdateOptions,
  QuestionUpdateResponses,
} from "../../models/question/QuestionUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/question/:id}
 */
export function questionUpdate<ThrowOnError extends boolean = true>(
  options: Options<QuestionUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuestionUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/question/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuestionUpdateResponses, ThrowOnError>>,
  );
}
