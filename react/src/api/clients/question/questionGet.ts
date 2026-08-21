/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { QuestionGetOptions, QuestionGetResponses } from "../../models/question/QuestionGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/question/:id}
 */
export function questionGet<ThrowOnError extends boolean = true>(
  options: Options<QuestionGetOptions, ThrowOnError>,
): Promise<RequestResult<QuestionGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/question/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<QuestionGetResponses, ThrowOnError>>;
}
