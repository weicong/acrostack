/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PageAdminUpdateOptions,
  PageAdminUpdateResponses,
} from "../../models/pageAdmin/PageAdminUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function pageAdminUpdate<ThrowOnError extends boolean = true>(
  options: Options<PageAdminUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<PageAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/pages/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PageAdminUpdateResponses, ThrowOnError>>,
  );
}
