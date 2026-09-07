/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TagAdminUpdateOptions,
  TagAdminUpdateResponses,
} from "../../models/tagAdmin/TagAdminUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function tagAdminUpdate<ThrowOnError extends boolean = true>(
  options: Options<TagAdminUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<TagAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/tags/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagAdminUpdateResponses, ThrowOnError>>,
  );
}
