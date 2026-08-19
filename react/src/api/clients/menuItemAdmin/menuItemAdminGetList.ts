/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminGetListOptions,
  MenuItemAdminGetListResponses,
} from "../../models/menuItemAdmin/MenuItemAdminGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export function menuItemAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<MenuItemAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/menu-items",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MenuItemAdminGetListResponses, ThrowOnError>>;
}
