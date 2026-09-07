/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  EntityTagAdminSetEntityTagsOptions,
  EntityTagAdminSetEntityTagsResponses,
} from "../../models/entityTagAdmin/EntityTagAdminSetEntityTags";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function entityTagAdminSetEntityTags<ThrowOnError extends boolean = true>(
  options: Options<EntityTagAdminSetEntityTagsOptions, ThrowOnError>,
): Unwrappable<RequestResult<EntityTagAdminSetEntityTagsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/entity-tags",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<EntityTagAdminSetEntityTagsResponses, ThrowOnError>>,
  );
}
