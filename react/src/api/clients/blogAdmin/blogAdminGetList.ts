/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminGetListOptions,
  BlogAdminGetListResponses,
} from "../../models/blogAdmin/BlogAdminGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export function blogAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<BlogAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/blogs",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogAdminGetListResponses, ThrowOnError>>,
  );
}
