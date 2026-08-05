/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagAdminGetListQueryFilter,
  TagAdminGetListQuerySorting,
  TagAdminGetListQuerySkipCount,
  TagAdminGetListQueryMaxResultCount,
  TagAdminGetListStatus200,
  TagAdminGetListStatus400,
  TagAdminGetListStatus401,
  TagAdminGetListStatus403,
  TagAdminGetListStatus404,
  TagAdminGetListStatus500,
  TagAdminGetListStatus501,
} from "../../models/tagAdmin/TagAdminGetList.ts";

function getTagAdminGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/tags` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/tags}
 */
export async function tagAdminGetList(
  params?: {
    Filter?: TagAdminGetListQueryFilter;
    Sorting?: TagAdminGetListQuerySorting;
    SkipCount?: TagAdminGetListQuerySkipCount;
    MaxResultCount?: TagAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagAdminGetListStatus200,
    ResponseErrorConfig<
      | TagAdminGetListStatus400
      | TagAdminGetListStatus401
      | TagAdminGetListStatus403
      | TagAdminGetListStatus404
      | TagAdminGetListStatus500
      | TagAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getTagAdminGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
