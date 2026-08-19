/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BlogFeatureGetOrDefaultOptions, BlogFeatureGetOrDefaultResponses } from '../../models/blogFeature/BlogFeatureGetOrDefault'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit/blogs/:blogId/features/:featureName}
 */
export function blogFeatureGetOrDefault<ThrowOnError extends boolean = true>(options: Options<BlogFeatureGetOrDefaultOptions, ThrowOnError>): Promise<RequestResult<BlogFeatureGetOrDefaultResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit/blogs/{blogId}/features/{featureName}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BlogFeatureGetOrDefaultResponses, ThrowOnError>>
}
