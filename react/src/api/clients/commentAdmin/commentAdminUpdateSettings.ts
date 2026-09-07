/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  CommentAdminUpdateSettingsOptions,
  CommentAdminUpdateSettingsResponses,
} from "../../models/commentAdmin/CommentAdminUpdateSettings";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/comments/settings}
 */
export function commentAdminUpdateSettings<ThrowOnError extends boolean = true>(
  options: Options<CommentAdminUpdateSettingsOptions, ThrowOnError>,
): Unwrappable<RequestResult<CommentAdminUpdateSettingsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/comments/settings",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<CommentAdminUpdateSettingsResponses, ThrowOnError>>,
  );
}
