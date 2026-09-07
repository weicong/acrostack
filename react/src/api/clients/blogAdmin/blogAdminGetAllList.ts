/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminGetAllListOptions,
  BlogAdminGetAllListResponses,
} from "../../models/blogAdmin/BlogAdminGetAllList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/all}
 */
export function blogAdminGetAllList<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminGetAllListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<BlogAdminGetAllListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/blogs/all",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogAdminGetAllListResponses, ThrowOnError>>,
  );
}
