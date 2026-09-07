/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  CommentAdminGetWaitingCountOptions,
  CommentAdminGetWaitingCountResponses,
} from "../../models/commentAdmin/CommentAdminGetWaitingCount";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/comments/waiting-count}
 */
export function commentAdminGetWaitingCount<ThrowOnError extends boolean = true>(
  options: Options<CommentAdminGetWaitingCountOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<CommentAdminGetWaitingCountResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/comments/waiting-count",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<CommentAdminGetWaitingCountResponses, ThrowOnError>>,
  );
}
