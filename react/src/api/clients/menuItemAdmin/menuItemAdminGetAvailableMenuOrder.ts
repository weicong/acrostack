/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminGetAvailableMenuOrderOptions,
  MenuItemAdminGetAvailableMenuOrderResponses,
} from "../../models/menuItemAdmin/MenuItemAdminGetAvailableMenuOrder";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/available-order}
 */
export function menuItemAdminGetAvailableMenuOrder<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminGetAvailableMenuOrderOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<MenuItemAdminGetAvailableMenuOrderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/menu-items/available-order",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemAdminGetAvailableMenuOrderResponses, ThrowOnError>>,
  );
}
