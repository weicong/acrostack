/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MarkedItemPublicToggleOptions,
  MarkedItemPublicToggleResponses,
} from "../../models/markedItemPublic/MarkedItemPublicToggle";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function markedItemPublicToggle<ThrowOnError extends boolean = true>(
  options: Options<MarkedItemPublicToggleOptions, ThrowOnError>,
): Unwrappable<RequestResult<MarkedItemPublicToggleResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-public/marked-items/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MarkedItemPublicToggleResponses, ThrowOnError>>,
  );
}
