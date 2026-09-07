/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ReactionPublicCreateOptions,
  ReactionPublicCreateResponses,
} from "../../models/reactionPublic/ReactionPublicCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId/:reaction}
 */
export function reactionPublicCreate<ThrowOnError extends boolean = true>(
  options: Options<ReactionPublicCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<ReactionPublicCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-public/reactions/{entityType}/{entityId}/{reaction}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ReactionPublicCreateResponses, ThrowOnError>>,
  );
}
