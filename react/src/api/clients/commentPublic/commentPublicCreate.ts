/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  CommentPublicCreateOptions,
  CommentPublicCreateResponses,
} from "../../models/commentPublic/CommentPublicCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export function commentPublicCreate<ThrowOnError extends boolean = true>(
  options: Options<CommentPublicCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<CommentPublicCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-public/comments/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<CommentPublicCreateResponses, ThrowOnError>>,
  );
}
