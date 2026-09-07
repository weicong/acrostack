/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MenuItemPublicGetListOptions,
  MenuItemPublicGetListResponses,
} from "../../models/menuItemPublic/MenuItemPublicGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/menu-items}
 */
export function menuItemPublicGetList<ThrowOnError extends boolean = true>(
  options: Options<MenuItemPublicGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<MenuItemPublicGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/menu-items",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MenuItemPublicGetListResponses, ThrowOnError>>,
  );
}
