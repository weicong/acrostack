/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TagPublicGetAllRelatedTagsOptions,
  TagPublicGetAllRelatedTagsResponses,
} from "../../models/tagPublic/TagPublicGetAllRelatedTags";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/tags/:entityType/:entityId}
 */
export function tagPublicGetAllRelatedTags<ThrowOnError extends boolean = true>(
  options: Options<TagPublicGetAllRelatedTagsOptions, ThrowOnError>,
): Unwrappable<RequestResult<TagPublicGetAllRelatedTagsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/tags/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagPublicGetAllRelatedTagsResponses, ThrowOnError>>,
  );
}
