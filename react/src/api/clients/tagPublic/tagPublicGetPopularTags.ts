/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TagPublicGetPopularTagsOptions,
  TagPublicGetPopularTagsResponses,
} from "../../models/tagPublic/TagPublicGetPopularTags";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/tags/popular/:entityType/:maxCount}
 */
export function tagPublicGetPopularTags<ThrowOnError extends boolean = true>(
  options: Options<TagPublicGetPopularTagsOptions, ThrowOnError>,
): Unwrappable<RequestResult<TagPublicGetPopularTagsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/tags/popular/{entityType}/{maxCount}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagPublicGetPopularTagsResponses, ThrowOnError>>,
  );
}
