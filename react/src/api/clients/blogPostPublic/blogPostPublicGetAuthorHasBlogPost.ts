/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogPostPublicGetAuthorHasBlogPostOptions, BlogPostPublicGetAuthorHasBlogPostResponses } from '../../models/blogPostPublic/BlogPostPublicGetAuthorHasBlogPost'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/blog-posts/authors/:id}
 */
export function blogPostPublicGetAuthorHasBlogPost<ThrowOnError extends boolean = true>(options: Options<BlogPostPublicGetAuthorHasBlogPostOptions, ThrowOnError>): Promise<RequestResult<BlogPostPublicGetAuthorHasBlogPostResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-public/blog-posts/authors/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogPostPublicGetAuthorHasBlogPostResponses, ThrowOnError>>
}
