/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminGetOptions,
  BlogAdminGetResponses,
} from "../../models/blogAdmin/BlogAdminGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function blogAdminGet<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminGetOptions, ThrowOnError>,
): Promise<RequestResult<BlogAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/blogs/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogAdminGetResponses, ThrowOnError>>;
}
