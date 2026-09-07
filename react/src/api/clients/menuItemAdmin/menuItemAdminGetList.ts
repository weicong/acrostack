/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminGetListOptions,
  MenuItemAdminGetListResponses,
} from "../../models/menuItemAdmin/MenuItemAdminGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function menuItemAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<MenuItemAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/menu-items",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemAdminGetListResponses, ThrowOnError>>,
  );
}
