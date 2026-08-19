/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogFeatureAdminGetListOptions, BlogFeatureAdminGetListResponses } from '../../models/blogFeatureAdmin/BlogFeatureAdminGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function blogFeatureAdminGetList<ThrowOnError extends boolean = true>(options: Options<BlogFeatureAdminGetListOptions, ThrowOnError>): Promise<RequestResult<BlogFeatureAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/blogs/{blogId}/features', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogFeatureAdminGetListResponses, ThrowOnError>>
}
