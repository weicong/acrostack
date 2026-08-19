/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TagAdminGetOptions, TagAdminGetResponses } from '../../models/tagAdmin/TagAdminGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function tagAdminGet<ThrowOnError extends boolean = true>(options: Options<TagAdminGetOptions, ThrowOnError>): Promise<RequestResult<TagAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/tags/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TagAdminGetResponses, ThrowOnError>>
}
