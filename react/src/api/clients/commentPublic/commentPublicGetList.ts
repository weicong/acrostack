/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  CommentPublicGetListOptions,
  CommentPublicGetListResponses,
} from "../../models/commentPublic/CommentPublicGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/comments/:entityType/:entityId}
 */
export function commentPublicGetList<ThrowOnError extends boolean = true>(
  options: Options<CommentPublicGetListOptions, ThrowOnError>,
): Promise<RequestResult<CommentPublicGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-public/comments/{entityType}/{entityId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<CommentPublicGetListResponses, ThrowOnError>>;
}
