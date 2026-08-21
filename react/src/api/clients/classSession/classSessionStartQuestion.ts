/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionStartQuestionOptions,
  ClassSessionStartQuestionResponses,
} from "../../models/classSession/ClassSessionStartQuestion";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/start-question/:questionId}
 */
export function classSessionStartQuestion<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionStartQuestionOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionStartQuestionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/start-question/{questionId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionStartQuestionResponses, ThrowOnError>>;
}
