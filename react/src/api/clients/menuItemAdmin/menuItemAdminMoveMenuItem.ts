/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminMoveMenuItemOptions,
  MenuItemAdminMoveMenuItemResponses,
} from "../../models/menuItemAdmin/MenuItemAdminMoveMenuItem";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/:id/move}
 */
export function menuItemAdminMoveMenuItem<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminMoveMenuItemOptions, ThrowOnError>,
): Unwrappable<RequestResult<MenuItemAdminMoveMenuItemResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/menu-items/{id}/move",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemAdminMoveMenuItemResponses, ThrowOnError>>,
  );
}
