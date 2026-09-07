/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeUpdateOptions,
  OpenIddictScopeUpdateResponses,
} from "../../models/openIddictScope/OpenIddictScopeUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function openIddictScopeUpdate<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictScopeUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/open-iddict-scope/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictScopeUpdateResponses, ThrowOnError>>,
  );
}
