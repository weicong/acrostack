/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TagAdminGetTagDefinitionsOptions, TagAdminGetTagDefinitionsResponses } from '../../models/tagAdmin/TagAdminGetTagDefinitions'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/tags/tag-definitions}
 */
export function tagAdminGetTagDefinitions<ThrowOnError extends boolean = true>(options: Options<TagAdminGetTagDefinitionsOptions, ThrowOnError> = {}): Promise<RequestResult<TagAdminGetTagDefinitionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/tags/tag-definitions', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TagAdminGetTagDefinitionsResponses, ThrowOnError>>
}
