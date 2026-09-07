/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PageAdminSetAsHomePageOptions,
  PageAdminSetAsHomePageResponses,
} from "../../models/pageAdmin/PageAdminSetAsHomePage";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages/setashomepage/:id}
 */
export function pageAdminSetAsHomePage<ThrowOnError extends boolean = true>(
  options: Options<PageAdminSetAsHomePageOptions, ThrowOnError>,
): Unwrappable<RequestResult<PageAdminSetAsHomePageResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/pages/setashomepage/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PageAdminSetAsHomePageResponses, ThrowOnError>>,
  );
}
