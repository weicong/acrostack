/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictApplicationGetListOptions,
  OpenIddictApplicationGetListResponses,
} from "../../models/openIddictApplication/OpenIddictApplicationGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-application}
 */
export function openIddictApplicationGetList<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictApplicationGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<OpenIddictApplicationGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/open-iddict-application",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictApplicationGetListResponses, ThrowOnError>>,
  );
}
