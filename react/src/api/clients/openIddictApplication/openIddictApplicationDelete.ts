/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictApplicationDeleteOptions,
  OpenIddictApplicationDeleteResponses,
} from "../../models/openIddictApplication/OpenIddictApplicationDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function openIddictApplicationDelete<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictApplicationDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictApplicationDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/open-iddict-application/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictApplicationDeleteResponses, ThrowOnError>>,
  );
}
