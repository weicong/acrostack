/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminGetPermissionLookupOptions,
  MenuItemAdminGetPermissionLookupResponses,
} from "../../models/menuItemAdmin/MenuItemAdminGetPermissionLookup";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/permissions}
 */
export function menuItemAdminGetPermissionLookup<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminGetPermissionLookupOptions, ThrowOnError> = {},
): Promise<RequestResult<MenuItemAdminGetPermissionLookupResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/menu-items/lookup/permissions",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MenuItemAdminGetPermissionLookupResponses, ThrowOnError>>;
}
