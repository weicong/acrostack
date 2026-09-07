/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminCreateOptions,
  MenuItemAdminCreateResponses,
} from "../../models/menuItemAdmin/MenuItemAdminCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function menuItemAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<MenuItemAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/menu-items",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemAdminCreateResponses, ThrowOnError>>,
  );
}
