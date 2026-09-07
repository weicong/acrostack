/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TagAdminCreateOptions,
  TagAdminCreateResponses,
} from "../../models/tagAdmin/TagAdminCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function tagAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<TagAdminCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<TagAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/tags",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagAdminCreateResponses, ThrowOnError>>,
  );
}
