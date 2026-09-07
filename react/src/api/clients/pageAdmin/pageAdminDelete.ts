/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PageAdminDeleteOptions,
  PageAdminDeleteResponses,
} from "../../models/pageAdmin/PageAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function pageAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<PageAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<PageAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/pages/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PageAdminDeleteResponses, ThrowOnError>>,
  );
}
