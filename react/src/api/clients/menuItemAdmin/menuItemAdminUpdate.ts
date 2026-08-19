/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MenuItemAdminUpdateOptions, MenuItemAdminUpdateResponses } from '../../models/menuItemAdmin/MenuItemAdminUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function menuItemAdminUpdate<ThrowOnError extends boolean = true>(options: Options<MenuItemAdminUpdateOptions, ThrowOnError>): Promise<RequestResult<MenuItemAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-admin/menu-items/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MenuItemAdminUpdateResponses, ThrowOnError>>
}
