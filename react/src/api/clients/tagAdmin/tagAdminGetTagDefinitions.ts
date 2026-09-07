/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TagAdminGetTagDefinitionsOptions,
  TagAdminGetTagDefinitionsResponses,
} from "../../models/tagAdmin/TagAdminGetTagDefinitions";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags/tag-definitions}
 */
export function tagAdminGetTagDefinitions<ThrowOnError extends boolean = true>(
  options: Options<TagAdminGetTagDefinitionsOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<TagAdminGetTagDefinitionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/tags/tag-definitions",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagAdminGetTagDefinitionsResponses, ThrowOnError>>,
  );
}
