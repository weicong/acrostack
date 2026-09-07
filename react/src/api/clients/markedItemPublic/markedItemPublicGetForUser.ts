/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MarkedItemPublicGetForUserOptions,
  MarkedItemPublicGetForUserResponses,
} from "../../models/markedItemPublic/MarkedItemPublicGetForUser";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function markedItemPublicGetForUser<ThrowOnError extends boolean = true>(
  options: Options<MarkedItemPublicGetForUserOptions, ThrowOnError>,
): Unwrappable<RequestResult<MarkedItemPublicGetForUserResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/marked-items/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MarkedItemPublicGetForUserResponses, ThrowOnError>>,
  );
}
