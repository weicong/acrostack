/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictTokenRevokeOptions,
  OpenIddictTokenRevokeResponses,
} from "../../models/openIddictToken/OpenIddictTokenRevoke";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-token/:id/revoke}
 */
export function openIddictTokenRevoke<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictTokenRevokeOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictTokenRevokeResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/open-iddict-token/{id}/revoke",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictTokenRevokeResponses, ThrowOnError>>,
  );
}
