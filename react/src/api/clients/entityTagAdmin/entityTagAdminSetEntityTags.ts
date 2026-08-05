/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EntityTagAdminSetEntityTagsData,
  EntityTagAdminSetEntityTagsStatus200,
  EntityTagAdminSetEntityTagsStatus204,
  EntityTagAdminSetEntityTagsStatus400,
  EntityTagAdminSetEntityTagsStatus401,
  EntityTagAdminSetEntityTagsStatus403,
  EntityTagAdminSetEntityTagsStatus404,
  EntityTagAdminSetEntityTagsStatus500,
  EntityTagAdminSetEntityTagsStatus501,
} from "../../models/entityTagAdmin/EntityTagAdminSetEntityTags.ts";

function getEntityTagAdminSetEntityTagsUrl() {
  const res = { method: "PUT", url: `/api/cms-kit-admin/entity-tags` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export async function entityTagAdminSetEntityTags(
  data?: EntityTagAdminSetEntityTagsData,
  config: Partial<RequestConfig<EntityTagAdminSetEntityTagsData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    EntityTagAdminSetEntityTagsStatus200 | EntityTagAdminSetEntityTagsStatus204,
    ResponseErrorConfig<
      | EntityTagAdminSetEntityTagsStatus400
      | EntityTagAdminSetEntityTagsStatus401
      | EntityTagAdminSetEntityTagsStatus403
      | EntityTagAdminSetEntityTagsStatus404
      | EntityTagAdminSetEntityTagsStatus500
      | EntityTagAdminSetEntityTagsStatus501
    >,
    EntityTagAdminSetEntityTagsData
  >({
    method: "PUT",
    url: getEntityTagAdminSetEntityTagsUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
