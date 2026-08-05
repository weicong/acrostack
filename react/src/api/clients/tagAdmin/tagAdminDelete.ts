/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagAdminDeletePathId,
  TagAdminDeleteStatus200,
  TagAdminDeleteStatus204,
  TagAdminDeleteStatus400,
  TagAdminDeleteStatus401,
  TagAdminDeleteStatus403,
  TagAdminDeleteStatus404,
  TagAdminDeleteStatus500,
  TagAdminDeleteStatus501,
} from "../../models/tagAdmin/TagAdminDelete.ts";

function getTagAdminDeleteUrl(id: TagAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/tags/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export async function tagAdminDelete(
  id: TagAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagAdminDeleteStatus200 | TagAdminDeleteStatus204,
    ResponseErrorConfig<
      | TagAdminDeleteStatus400
      | TagAdminDeleteStatus401
      | TagAdminDeleteStatus403
      | TagAdminDeleteStatus404
      | TagAdminDeleteStatus500
      | TagAdminDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getTagAdminDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
