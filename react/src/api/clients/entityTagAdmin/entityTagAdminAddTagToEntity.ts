/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  EntityTagAdminAddTagToEntityOptions,
  EntityTagAdminAddTagToEntityResponses,
} from "../../models/entityTagAdmin/EntityTagAdminAddTagToEntity";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function entityTagAdminAddTagToEntity<ThrowOnError extends boolean = true>(
  options: Options<EntityTagAdminAddTagToEntityOptions, ThrowOnError>,
): Unwrappable<RequestResult<EntityTagAdminAddTagToEntityResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/entity-tags",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<EntityTagAdminAddTagToEntityResponses, ThrowOnError>>,
  );
}
