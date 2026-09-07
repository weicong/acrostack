/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminGetOptions,
  MenuItemAdminGetResponses,
} from "../../models/menuItemAdmin/MenuItemAdminGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function menuItemAdminGet<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<MenuItemAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/menu-items/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemAdminGetResponses, ThrowOnError>>,
  );
}
