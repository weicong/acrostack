/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogPostAdminCreateAndPublishOptions, BlogPostAdminCreateAndPublishResponses } from '../../models/blogPostAdmin/BlogPostAdminCreateAndPublish'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-publish}
 */
export function blogPostAdminCreateAndPublish<ThrowOnError extends boolean = true>(options: Options<BlogPostAdminCreateAndPublishOptions, ThrowOnError>): Promise<RequestResult<BlogPostAdminCreateAndPublishResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/blogs/blog-posts/create-and-publish', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogPostAdminCreateAndPublishResponses, ThrowOnError>>
}
