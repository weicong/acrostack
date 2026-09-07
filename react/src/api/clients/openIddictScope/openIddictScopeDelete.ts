/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeDeleteOptions,
  OpenIddictScopeDeleteResponses,
} from "../../models/openIddictScope/OpenIddictScopeDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function openIddictScopeDelete<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictScopeDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/open-iddict-scope/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictScopeDeleteResponses, ThrowOnError>>,
  );
}
