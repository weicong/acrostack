/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TagAdminDeleteOptions,
  TagAdminDeleteResponses,
} from "../../models/tagAdmin/TagAdminDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function tagAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<TagAdminDeleteOptions, ThrowOnError>,
): Promise<RequestResult<TagAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-admin/tags/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TagAdminDeleteResponses, ThrowOnError>>;
}
