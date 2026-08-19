/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogPostAdminCreateOptions, BlogPostAdminCreateResponses } from '../../models/blogPostAdmin/BlogPostAdminCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export function blogPostAdminCreate<ThrowOnError extends boolean = true>(options: Options<BlogPostAdminCreateOptions, ThrowOnError>): Promise<RequestResult<BlogPostAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/blogs/blog-posts', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogPostAdminCreateResponses, ThrowOnError>>
}
