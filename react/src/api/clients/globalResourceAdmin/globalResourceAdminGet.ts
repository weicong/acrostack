/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { GlobalResourceAdminGetOptions, GlobalResourceAdminGetResponses } from '../../models/globalResourceAdmin/GlobalResourceAdminGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export function globalResourceAdminGet<ThrowOnError extends boolean = true>(options: Options<GlobalResourceAdminGetOptions, ThrowOnError> = {}): Promise<RequestResult<GlobalResourceAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/global-resources', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<GlobalResourceAdminGetResponses, ThrowOnError>>
}
