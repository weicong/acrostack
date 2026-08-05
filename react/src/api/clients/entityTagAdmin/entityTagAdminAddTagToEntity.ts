/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EntityTagAdminAddTagToEntityData,
  EntityTagAdminAddTagToEntityStatus200,
  EntityTagAdminAddTagToEntityStatus204,
  EntityTagAdminAddTagToEntityStatus400,
  EntityTagAdminAddTagToEntityStatus401,
  EntityTagAdminAddTagToEntityStatus403,
  EntityTagAdminAddTagToEntityStatus404,
  EntityTagAdminAddTagToEntityStatus500,
  EntityTagAdminAddTagToEntityStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminAddTagToEntity.ts";

function getEntityTagAdminAddTagToEntityUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/entity-tags` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export async function entityTagAdminAddTagToEntity(
  data?: EntityTagAdminAddTagToEntityData,
  config: Partial<RequestConfig<EntityTagAdminAddTagToEntityData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    EntityTagAdminAddTagToEntityStatus200 | EntityTagAdminAddTagToEntityStatus204,
    ResponseErrorConfig<
      | EntityTagAdminAddTagToEntityStatus400
      | EntityTagAdminAddTagToEntityStatus401
      | EntityTagAdminAddTagToEntityStatus403
      | EntityTagAdminAddTagToEntityStatus404
      | EntityTagAdminAddTagToEntityStatus500
      | EntityTagAdminAddTagToEntityStatus501
    >,
    EntityTagAdminAddTagToEntityData
  >({
    method: "POST",
    url: getEntityTagAdminAddTagToEntityUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
