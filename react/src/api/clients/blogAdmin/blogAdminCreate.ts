/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminCreateOptions,
  BlogAdminCreateResponses,
} from "../../models/blogAdmin/BlogAdminCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export function blogAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminCreateOptions, ThrowOnError>,
): Promise<RequestResult<BlogAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/cms-kit-admin/blogs",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogAdminCreateResponses, ThrowOnError>>;
}
