/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TagAdminCreateOptions, TagAdminCreateResponses } from '../../models/tagAdmin/TagAdminCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function tagAdminCreate<ThrowOnError extends boolean = true>(options: Options<TagAdminCreateOptions, ThrowOnError>): Promise<RequestResult<TagAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/tags', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TagAdminCreateResponses, ThrowOnError>>
}
