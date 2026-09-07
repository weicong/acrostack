/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PageAdminCreateOptions,
  PageAdminCreateResponses,
} from "../../models/pageAdmin/PageAdminCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function pageAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<PageAdminCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<PageAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/pages",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PageAdminCreateResponses, ThrowOnError>>,
  );
}
