/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MarkedItemPublicGetForUserOptions,
  MarkedItemPublicGetForUserResponses,
} from "../../models/markedItemPublic/MarkedItemPublicGetForUser";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function markedItemPublicGetForUser<ThrowOnError extends boolean = true>(
  options: Options<MarkedItemPublicGetForUserOptions, ThrowOnError>,
): Promise<RequestResult<MarkedItemPublicGetForUserResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-public/marked-items/{entityType}/{entityId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MarkedItemPublicGetForUserResponses, ThrowOnError>>;
}
