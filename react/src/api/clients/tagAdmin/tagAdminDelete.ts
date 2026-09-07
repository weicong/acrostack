/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TagAdminDeleteOptions,
  TagAdminDeleteResponses,
} from "../../models/tagAdmin/TagAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function tagAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<TagAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<TagAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/tags/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagAdminDeleteResponses, ThrowOnError>>,
  );
}
