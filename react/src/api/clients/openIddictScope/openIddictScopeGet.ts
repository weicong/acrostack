/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeGetOptions,
  OpenIddictScopeGetResponses,
} from "../../models/openIddictScope/OpenIddictScopeGet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function openIddictScopeGet<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeGetOptions, ThrowOnError>,
): Promise<RequestResult<OpenIddictScopeGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/open-iddict-scope/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictScopeGetResponses, ThrowOnError>>;
}
