/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminCreateOptions,
  BlogAdminCreateResponses,
} from "../../models/blogAdmin/BlogAdminCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export function blogAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/blogs",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogAdminCreateResponses, ThrowOnError>>,
  );
}
