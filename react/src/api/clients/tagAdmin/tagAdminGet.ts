/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagAdminGetPathId,
  TagAdminGetStatus200,
  TagAdminGetStatus400,
  TagAdminGetStatus401,
  TagAdminGetStatus403,
  TagAdminGetStatus404,
  TagAdminGetStatus500,
  TagAdminGetStatus501,
} from "../../models/tagAdmin/TagAdminGet.ts";

function getTagAdminGetUrl(id: TagAdminGetPathId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/tags/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export async function tagAdminGet(
  id: TagAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagAdminGetStatus200,
    ResponseErrorConfig<
      | TagAdminGetStatus400
      | TagAdminGetStatus401
      | TagAdminGetStatus403
      | TagAdminGetStatus404
      | TagAdminGetStatus500
      | TagAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getTagAdminGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
