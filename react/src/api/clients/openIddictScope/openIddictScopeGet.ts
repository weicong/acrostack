/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeGetOptions,
  OpenIddictScopeGetResponses,
} from "../../models/openIddictScope/OpenIddictScopeGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function openIddictScopeGet<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictScopeGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/open-iddict-scope/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictScopeGetResponses, ThrowOnError>>,
  );
}
