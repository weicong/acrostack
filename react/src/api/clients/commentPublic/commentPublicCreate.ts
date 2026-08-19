/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  CommentPublicCreateOptions,
  CommentPublicCreateResponses,
} from "../../models/commentPublic/CommentPublicCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export function commentPublicCreate<ThrowOnError extends boolean = true>(
  options: Options<CommentPublicCreateOptions, ThrowOnError>,
): Promise<RequestResult<CommentPublicCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/cms-kit-public/comments/{entityType}/{entityId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<CommentPublicCreateResponses, ThrowOnError>>;
}
