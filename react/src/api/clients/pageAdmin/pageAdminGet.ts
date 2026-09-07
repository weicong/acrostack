/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PageAdminGetOptions,
  PageAdminGetResponses,
} from "../../models/pageAdmin/PageAdminGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function pageAdminGet<ThrowOnError extends boolean = true>(
  options: Options<PageAdminGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<PageAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/pages/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PageAdminGetResponses, ThrowOnError>>,
  );
}
