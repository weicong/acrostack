/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TagPublicGetAllRelatedTagsOptions, TagPublicGetAllRelatedTagsResponses } from '../../models/tagPublic/TagPublicGetAllRelatedTags'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/tags/:entityType/:entityId}
 */
export function tagPublicGetAllRelatedTags<ThrowOnError extends boolean = true>(options: Options<TagPublicGetAllRelatedTagsOptions, ThrowOnError>): Promise<RequestResult<TagPublicGetAllRelatedTagsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-public/tags/{entityType}/{entityId}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TagPublicGetAllRelatedTagsResponses, ThrowOnError>>
}
