/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminGetOptions,
  MenuItemAdminGetResponses,
} from "../../models/menuItemAdmin/MenuItemAdminGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function menuItemAdminGet<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminGetOptions, ThrowOnError>,
): Promise<RequestResult<MenuItemAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/menu-items/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MenuItemAdminGetResponses, ThrowOnError>>;
}
