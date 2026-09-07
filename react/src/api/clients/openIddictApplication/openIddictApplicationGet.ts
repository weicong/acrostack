/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictApplicationGetOptions,
  OpenIddictApplicationGetResponses,
} from "../../models/openIddictApplication/OpenIddictApplicationGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-application/:id}
 */
export function openIddictApplicationGet<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictApplicationGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictApplicationGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/open-iddict-application/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictApplicationGetResponses, ThrowOnError>>,
  );
}
