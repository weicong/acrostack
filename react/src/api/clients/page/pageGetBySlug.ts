/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageGetBySlugQuerySlug,
  PageGetBySlugStatus200,
  PageGetBySlugStatus400,
  PageGetBySlugStatus401,
  PageGetBySlugStatus403,
  PageGetBySlugStatus404,
  PageGetBySlugStatus500,
  PageGetBySlugStatus501,
} from "../../models/page/PageGetBySlug.ts";

function getPageGetBySlugUrl() {
  const res = { method: "GET", url: `/api/app/page/by-slug` as const };

  return res;
}

/**
 * {@link /api/app/page/by-slug}
 */
export async function pageGetBySlug(
  params?: { slug?: PageGetBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageGetBySlugStatus200,
    ResponseErrorConfig<
      | PageGetBySlugStatus400
      | PageGetBySlugStatus401
      | PageGetBySlugStatus403
      | PageGetBySlugStatus404
      | PageGetBySlugStatus500
      | PageGetBySlugStatus501
    >,
    unknown
  >({ method: "GET", url: getPageGetBySlugUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
