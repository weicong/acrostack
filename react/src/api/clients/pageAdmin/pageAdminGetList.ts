/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  PageAdminGetListOptions,
  PageAdminGetListResponses,
} from "../../models/pageAdmin/PageAdminGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function pageAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<PageAdminGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<PageAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/pages",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<PageAdminGetListResponses, ThrowOnError>>,
  );
}
