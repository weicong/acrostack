/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MenuItemAdminGetAvailableMenuOrderOptions, MenuItemAdminGetAvailableMenuOrderResponses } from '../../models/menuItemAdmin/MenuItemAdminGetAvailableMenuOrder'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/menu-items/available-order}
 */
export function menuItemAdminGetAvailableMenuOrder<ThrowOnError extends boolean = true>(options: Options<MenuItemAdminGetAvailableMenuOrderOptions, ThrowOnError> = {}): Promise<RequestResult<MenuItemAdminGetAvailableMenuOrderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-admin/menu-items/available-order', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MenuItemAdminGetAvailableMenuOrderResponses, ThrowOnError>>
}
