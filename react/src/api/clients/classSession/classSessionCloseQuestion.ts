/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionCloseQuestionOptions,
  ClassSessionCloseQuestionResponses,
} from "../../models/classSession/ClassSessionCloseQuestion";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/close-question/:questionId}
 */
export function classSessionCloseQuestion<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionCloseQuestionOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionCloseQuestionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/close-question/{questionId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionCloseQuestionResponses, ThrowOnError>>;
}
