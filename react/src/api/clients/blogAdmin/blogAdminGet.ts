/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminGetOptions,
  BlogAdminGetResponses,
} from "../../models/blogAdmin/BlogAdminGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function blogAdminGet<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/blogs/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogAdminGetResponses, ThrowOnError>>,
  );
}
