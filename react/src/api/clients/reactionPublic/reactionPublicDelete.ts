/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ReactionPublicDeleteOptions,
  ReactionPublicDeleteResponses,
} from "../../models/reactionPublic/ReactionPublicDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export function reactionPublicDelete<ThrowOnError extends boolean = true>(
  options: Options<ReactionPublicDeleteOptions, ThrowOnError>,
): Promise<RequestResult<ReactionPublicDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-public/reactions/{entityType}/{entityId}/{reaction}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ReactionPublicDeleteResponses, ThrowOnError>>;
}
