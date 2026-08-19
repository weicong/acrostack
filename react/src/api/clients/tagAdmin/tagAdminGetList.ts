/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TagAdminGetListOptions,
  TagAdminGetListResponses,
} from "../../models/tagAdmin/TagAdminGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/tags}
 */
export function tagAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<TagAdminGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<TagAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/tags",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TagAdminGetListResponses, ThrowOnError>>;
}
