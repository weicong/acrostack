/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ReactionPublicDeleteOptions,
  ReactionPublicDeleteResponses,
} from "../../models/reactionPublic/ReactionPublicDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export function reactionPublicDelete<ThrowOnError extends boolean = true>(
  options: Options<ReactionPublicDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<ReactionPublicDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-public/reactions/{entityType}/{entityId}/{reaction}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ReactionPublicDeleteResponses, ThrowOnError>>,
  );
}
