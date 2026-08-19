/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminGetAllListOptions,
  BlogAdminGetAllListResponses,
} from "../../models/blogAdmin/BlogAdminGetAllList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/all}
 */
export function blogAdminGetAllList<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminGetAllListOptions, ThrowOnError> = {},
): Promise<RequestResult<BlogAdminGetAllListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/blogs/all",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogAdminGetAllListResponses, ThrowOnError>>;
}
