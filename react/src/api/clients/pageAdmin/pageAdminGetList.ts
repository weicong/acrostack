/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { PageAdminGetListOptions, PageAdminGetListResponses } from '../../models/pageAdmin/PageAdminGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function pageAdminGetList<ThrowOnError extends boolean = true>(options: Options<PageAdminGetListOptions, ThrowOnError> = {}): Promise<RequestResult<PageAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/pages', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<PageAdminGetListResponses, ThrowOnError>>
}
