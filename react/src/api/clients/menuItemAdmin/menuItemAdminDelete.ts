/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MenuItemAdminDeleteOptions,
  MenuItemAdminDeleteResponses,
} from "../../models/menuItemAdmin/MenuItemAdminDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export function menuItemAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<MenuItemAdminDeleteOptions, ThrowOnError>,
): Promise<RequestResult<MenuItemAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-admin/menu-items/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MenuItemAdminDeleteResponses, ThrowOnError>>;
}
