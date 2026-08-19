/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MenuItemAdminMoveMenuItemOptions, MenuItemAdminMoveMenuItemResponses } from '../../models/menuItemAdmin/MenuItemAdminMoveMenuItem'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/menu-items/:id/move}
 */
export function menuItemAdminMoveMenuItem<ThrowOnError extends boolean = true>(options: Options<MenuItemAdminMoveMenuItemOptions, ThrowOnError>): Promise<RequestResult<MenuItemAdminMoveMenuItemResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-admin/menu-items/{id}/move', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MenuItemAdminMoveMenuItemResponses, ThrowOnError>>
}
