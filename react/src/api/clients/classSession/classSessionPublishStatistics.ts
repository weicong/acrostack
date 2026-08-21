/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ClassSessionPublishStatisticsOptions,
  ClassSessionPublishStatisticsResponses,
} from "../../models/classSession/ClassSessionPublishStatistics";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/class-session/:id/publish-statistics/:questionId}
 */
export function classSessionPublishStatistics<ThrowOnError extends boolean = true>(
  options: Options<ClassSessionPublishStatisticsOptions, ThrowOnError>,
): Promise<RequestResult<ClassSessionPublishStatisticsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/class-session/{id}/publish-statistics/{questionId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ClassSessionPublishStatisticsResponses, ThrowOnError>>;
}
