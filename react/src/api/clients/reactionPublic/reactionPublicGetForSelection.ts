/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ReactionPublicGetForSelectionOptions,
  ReactionPublicGetForSelectionResponses,
} from "../../models/reactionPublic/ReactionPublicGetForSelection";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId}
 */
export function reactionPublicGetForSelection<ThrowOnError extends boolean = true>(
  options: Options<ReactionPublicGetForSelectionOptions, ThrowOnError>,
): Promise<RequestResult<ReactionPublicGetForSelectionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-public/reactions/{entityType}/{entityId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ReactionPublicGetForSelectionResponses, ThrowOnError>>;
}
