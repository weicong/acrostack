/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  QuestionGetListOptions,
  QuestionGetListResponses,
} from "../../models/question/QuestionGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/question}
 */
export function questionGetList<ThrowOnError extends boolean = true>(
  options: Options<QuestionGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<QuestionGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/question",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuestionGetListResponses, ThrowOnError>>;
}
