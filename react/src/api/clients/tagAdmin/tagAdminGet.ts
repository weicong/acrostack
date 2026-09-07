/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { TagAdminGetOptions, TagAdminGetResponses } from "../../models/tagAdmin/TagAdminGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export function tagAdminGet<ThrowOnError extends boolean = true>(
  options: Options<TagAdminGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<TagAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/tags/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TagAdminGetResponses, ThrowOnError>>,
  );
}
