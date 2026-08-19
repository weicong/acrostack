/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  PageAdminUpdateOptions,
  PageAdminUpdateResponses,
} from "../../models/pageAdmin/PageAdminUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function pageAdminUpdate<ThrowOnError extends boolean = true>(
  options: Options<PageAdminUpdateOptions, ThrowOnError>,
): Promise<RequestResult<PageAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/cms-kit-admin/pages/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<PageAdminUpdateResponses, ThrowOnError>>;
}
