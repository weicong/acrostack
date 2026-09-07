/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminCreateAndSendToReviewOptions,
  BlogPostAdminCreateAndSendToReviewResponses,
} from "../../models/blogPostAdmin/BlogPostAdminCreateAndSendToReview";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review}
 */
export function blogPostAdminCreateAndSendToReview<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminCreateAndSendToReviewOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostAdminCreateAndSendToReviewResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostAdminCreateAndSendToReviewResponses, ThrowOnError>>,
  );
}
