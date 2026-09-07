/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictScopeCreateOptions,
  OpenIddictScopeCreateResponses,
} from "../../models/openIddictScope/OpenIddictScopeCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-scope}
 */
export function openIddictScopeCreate<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictScopeCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictScopeCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/open-iddict-scope",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictScopeCreateResponses, ThrowOnError>>,
  );
}
