/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  CommentAdminUpdateSettingsOptions,
  CommentAdminUpdateSettingsResponses,
} from "../../models/commentAdmin/CommentAdminUpdateSettings";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/comments/settings}
 */
export function commentAdminUpdateSettings<ThrowOnError extends boolean = true>(
  options: Options<CommentAdminUpdateSettingsOptions, ThrowOnError>,
): Promise<RequestResult<CommentAdminUpdateSettingsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/cms-kit-admin/comments/settings",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<CommentAdminUpdateSettingsResponses, ThrowOnError>>;
}
