/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { QuestionGetOptions, QuestionGetResponses } from "../../models/question/QuestionGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/question/:id}
 */
export function questionGet<ThrowOnError extends boolean = true>(
  options: Options<QuestionGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<QuestionGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/question/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuestionGetResponses, ThrowOnError>>,
  );
}
