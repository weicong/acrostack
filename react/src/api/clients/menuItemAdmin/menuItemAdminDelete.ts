/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminDeleteOptions,
  MenuItemAdminDeleteResponses,
} from "../../models/menuItemAdmin/MenuItemAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function menuItemAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<MenuItemAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/menu-items/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemAdminDeleteResponses, ThrowOnError>>,
  );
}
