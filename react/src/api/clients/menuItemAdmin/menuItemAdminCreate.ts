/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MenuItemAdminCreateOptions, MenuItemAdminCreateResponses } from '../../models/menuItemAdmin/MenuItemAdminCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function menuItemAdminCreate<ThrowOnError extends boolean = true>(options: Options<MenuItemAdminCreateOptions, ThrowOnError>): Promise<RequestResult<MenuItemAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/menu-items', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MenuItemAdminCreateResponses, ThrowOnError>>
}
