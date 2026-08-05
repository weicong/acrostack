/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EntityTagAdminRemoveTagFromEntityQueryTagId,
  EntityTagAdminRemoveTagFromEntityQueryEntityType,
  EntityTagAdminRemoveTagFromEntityQueryEntityId,
  EntityTagAdminRemoveTagFromEntityStatus200,
  EntityTagAdminRemoveTagFromEntityStatus204,
  EntityTagAdminRemoveTagFromEntityStatus400,
  EntityTagAdminRemoveTagFromEntityStatus401,
  EntityTagAdminRemoveTagFromEntityStatus403,
  EntityTagAdminRemoveTagFromEntityStatus404,
  EntityTagAdminRemoveTagFromEntityStatus500,
  EntityTagAdminRemoveTagFromEntityStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminRemoveTagFromEntity.ts";

function getEntityTagAdminRemoveTagFromEntityUrl() {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/entity-tags` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export async function entityTagAdminRemoveTagFromEntity(
  params: {
    TagId: EntityTagAdminRemoveTagFromEntityQueryTagId;
    EntityType: EntityTagAdminRemoveTagFromEntityQueryEntityType;
    EntityId: EntityTagAdminRemoveTagFromEntityQueryEntityId;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    EntityTagAdminRemoveTagFromEntityStatus200 | EntityTagAdminRemoveTagFromEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminRemoveTagFromEntityStatus400
      | EntityTagAdminRemoveTagFromEntityStatus401
      | EntityTagAdminRemoveTagFromEntityStatus403
      | EntityTagAdminRemoveTagFromEntityStatus404
      | EntityTagAdminRemoveTagFromEntityStatus500
      | EntityTagAdminRemoveTagFromEntityStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getEntityTagAdminRemoveTagFromEntityUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
