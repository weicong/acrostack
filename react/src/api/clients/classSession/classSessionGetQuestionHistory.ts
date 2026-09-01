/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionGetQuestionHistoryOptions,
  ClassSessionGetQuestionHistoryResponses,
} from "../../models/classSession/ClassSessionGetQuestionHistory";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/question-history}
 */
export function classSessionGetQuestionHistory<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionGetQuestionHistoryOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionGetQuestionHistoryResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/class-session/{id}/question-history",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionGetQuestionHistoryResponses, ThrowOnError>>;
}
