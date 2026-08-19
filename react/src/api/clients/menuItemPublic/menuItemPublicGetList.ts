/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MenuItemPublicGetListOptions, MenuItemPublicGetListResponses } from '../../models/menuItemPublic/MenuItemPublicGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/menu-items}
 */
export function menuItemPublicGetList<ThrowOnError extends boolean = true>(options: Options<MenuItemPublicGetListOptions, ThrowOnError> = {}): Promise<RequestResult<MenuItemPublicGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-public/menu-items', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MenuItemPublicGetListResponses, ThrowOnError>>
}
