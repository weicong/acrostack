/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogPostAdminDraftOptions, BlogPostAdminDraftResponses } from '../../models/blogPostAdmin/BlogPostAdminDraft'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/draft}
 */
export function blogPostAdminDraft<ThrowOnError extends boolean = true>(options: Options<BlogPostAdminDraftOptions, ThrowOnError>): Promise<RequestResult<BlogPostAdminDraftResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/blogs/blog-posts/{id}/draft', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogPostAdminDraftResponses, ThrowOnError>>
}
