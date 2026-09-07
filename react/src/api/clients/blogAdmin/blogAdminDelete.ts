/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminDeleteOptions,
  BlogAdminDeleteResponses,
} from "../../models/blogAdmin/BlogAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function blogAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/blogs/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogAdminDeleteResponses, ThrowOnError>>,
  );
}
