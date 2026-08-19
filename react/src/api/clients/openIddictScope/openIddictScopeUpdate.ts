/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeUpdateOptions,
  OpenIddictScopeUpdateResponses,
} from "../../models/openIddictScope/OpenIddictScopeUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function openIddictScopeUpdate<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeUpdateOptions, ThrowOnError>,
): Promise<RequestResult<OpenIddictScopeUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/app/open-iddict-scope/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictScopeUpdateResponses, ThrowOnError>>;
}
