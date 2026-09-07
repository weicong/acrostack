/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  EntityTagAdminRemoveTagFromEntityOptions,
  EntityTagAdminRemoveTagFromEntityResponses,
} from "../../models/entityTagAdmin/EntityTagAdminRemoveTagFromEntity";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function entityTagAdminRemoveTagFromEntity<ThrowOnError extends boolean = true>(
  options: Options<EntityTagAdminRemoveTagFromEntityOptions, ThrowOnError>,
): Unwrappable<RequestResult<EntityTagAdminRemoveTagFromEntityResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/entity-tags",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<EntityTagAdminRemoveTagFromEntityResponses, ThrowOnError>>,
  );
}
