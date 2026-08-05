/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagAdminGetTagDefinitionsStatus200,
  TagAdminGetTagDefinitionsStatus400,
  TagAdminGetTagDefinitionsStatus401,
  TagAdminGetTagDefinitionsStatus403,
  TagAdminGetTagDefinitionsStatus404,
  TagAdminGetTagDefinitionsStatus500,
  TagAdminGetTagDefinitionsStatus501,
} from "../../models/tagAdmin/TagAdminGetTagDefinitions.ts";

function getTagAdminGetTagDefinitionsUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/tags/tag-definitions` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/tags/tag-definitions}
 */
export async function tagAdminGetTagDefinitions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagAdminGetTagDefinitionsStatus200,
    ResponseErrorConfig<
      | TagAdminGetTagDefinitionsStatus400
      | TagAdminGetTagDefinitionsStatus401
      | TagAdminGetTagDefinitionsStatus403
      | TagAdminGetTagDefinitionsStatus404
      | TagAdminGetTagDefinitionsStatus500
      | TagAdminGetTagDefinitionsStatus501
    >,
    unknown
  >({ method: "GET", url: getTagAdminGetTagDefinitionsUrl().url.toString(), ...requestConfig });

  return res.data;
}
