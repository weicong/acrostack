/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictTokenDeleteOptions,
  OpenIddictTokenDeleteResponses,
} from "../../models/openIddictToken/OpenIddictTokenDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-token/:id}
 */
export function openIddictTokenDelete<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictTokenDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictTokenDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/open-iddict-token/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictTokenDeleteResponses, ThrowOnError>>,
  );
}
