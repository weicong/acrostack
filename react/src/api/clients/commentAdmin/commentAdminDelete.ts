/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  CommentAdminDeleteOptions,
  CommentAdminDeleteResponses,
} from "../../models/commentAdmin/CommentAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/comments/:id}
 */
export function commentAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<CommentAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<CommentAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/comments/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<CommentAdminDeleteResponses, ThrowOnError>>,
  );
}
