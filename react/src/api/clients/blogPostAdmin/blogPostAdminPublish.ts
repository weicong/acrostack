/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogPostAdminPublishOptions, BlogPostAdminPublishResponses } from '../../models/blogPostAdmin/BlogPostAdminPublish'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/publish}
 */
export function blogPostAdminPublish<ThrowOnError extends boolean = true>(options: Options<BlogPostAdminPublishOptions, ThrowOnError>): Promise<RequestResult<BlogPostAdminPublishResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/blogs/blog-posts/{id}/publish', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogPostAdminPublishResponses, ThrowOnError>>
}
