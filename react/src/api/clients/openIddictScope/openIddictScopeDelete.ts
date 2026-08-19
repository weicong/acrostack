/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeDeleteOptions,
  OpenIddictScopeDeleteResponses,
} from "../../models/openIddictScope/OpenIddictScopeDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function openIddictScopeDelete<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeDeleteOptions, ThrowOnError>,
): Promise<RequestResult<OpenIddictScopeDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/open-iddict-scope/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictScopeDeleteResponses, ThrowOnError>>;
}
