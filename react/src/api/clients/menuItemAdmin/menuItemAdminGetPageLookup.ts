/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MenuItemAdminGetPageLookupOptions, MenuItemAdminGetPageLookupResponses } from '../../models/menuItemAdmin/MenuItemAdminGetPageLookup'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/pages}
 */
export function menuItemAdminGetPageLookup<ThrowOnError extends boolean = true>(options: Options<MenuItemAdminGetPageLookupOptions, ThrowOnError> = {}): Promise<RequestResult<MenuItemAdminGetPageLookupResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/menu-items/lookup/pages', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MenuItemAdminGetPageLookupResponses, ThrowOnError>>
}
