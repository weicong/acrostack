/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  CommentPublicUpdateOptions,
  CommentPublicUpdateResponses,
} from "../../models/commentPublic/CommentPublicUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export function commentPublicUpdate<ThrowOnError extends boolean = true>(
  options: Options<CommentPublicUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<CommentPublicUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-public/comments/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<CommentPublicUpdateResponses, ThrowOnError>>,
  );
}
