/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictApplicationUpdateOptions,
  OpenIddictApplicationUpdateResponses,
} from "../../models/openIddictApplication/OpenIddictApplicationUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function openIddictApplicationUpdate<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictApplicationUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictApplicationUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/open-iddict-application/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictApplicationUpdateResponses, ThrowOnError>>,
  );
}
