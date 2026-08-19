/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TagAdminUpdateOptions,
  TagAdminUpdateResponses,
} from "../../models/tagAdmin/TagAdminUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function tagAdminUpdate<ThrowOnError extends boolean = true>(
  options: Options<TagAdminUpdateOptions, ThrowOnError>,
): Promise<RequestResult<TagAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/cms-kit-admin/tags/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TagAdminUpdateResponses, ThrowOnError>>;
}
