/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogAdminUpdateOptions, BlogAdminUpdateResponses } from '../../models/blogAdmin/BlogAdminUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function blogAdminUpdate<ThrowOnError extends boolean = true>(options: Options<BlogAdminUpdateOptions, ThrowOnError>): Promise<RequestResult<BlogAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-admin/blogs/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogAdminUpdateResponses, ThrowOnError>>
}
