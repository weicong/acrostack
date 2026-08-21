/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionPublishAnswerOptions,
  ClassSessionPublishAnswerResponses,
} from "../../models/classSession/ClassSessionPublishAnswer";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/publish-answer/:questionId}
 */
export function classSessionPublishAnswer<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionPublishAnswerOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionPublishAnswerResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/publish-answer/{questionId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionPublishAnswerResponses, ThrowOnError>>;
}
