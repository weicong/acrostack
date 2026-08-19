/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TagPublicGetPopularTagsOptions,
  TagPublicGetPopularTagsResponses,
} from "../../models/tagPublic/TagPublicGetPopularTags";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/tags/popular/:entityType/:maxCount}
 */
export function tagPublicGetPopularTags<ThrowOnError extends boolean = true>(
  options: Options<TagPublicGetPopularTagsOptions, ThrowOnError>,
): Promise<RequestResult<TagPublicGetPopularTagsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-public/tags/popular/{entityType}/{maxCount}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TagPublicGetPopularTagsResponses, ThrowOnError>>;
}
