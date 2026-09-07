/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  QuestionGetListOptions,
  QuestionGetListResponses,
} from "../../models/question/QuestionGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/question}
 */
export function questionGetList<ThrowOnError extends boolean = true>(
  options: Options<QuestionGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<QuestionGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/question",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<QuestionGetListResponses, ThrowOnError>>,
  );
}
