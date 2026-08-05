/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PagesPublicFindBySlugQuerySlug,
  PagesPublicFindBySlugStatus200,
  PagesPublicFindBySlugStatus400,
  PagesPublicFindBySlugStatus401,
  PagesPublicFindBySlugStatus403,
  PagesPublicFindBySlugStatus404,
  PagesPublicFindBySlugStatus500,
  PagesPublicFindBySlugStatus501,
} from "../../models/pagesPublic/PagesPublicFindBySlug.ts";

function getPagesPublicFindBySlugUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/pages/by-slug` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/pages/by-slug}
 */
export async function pagesPublicFindBySlug(
  params?: { slug?: PagesPublicFindBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PagesPublicFindBySlugStatus200,
    ResponseErrorConfig<
      | PagesPublicFindBySlugStatus400
      | PagesPublicFindBySlugStatus401
      | PagesPublicFindBySlugStatus403
      | PagesPublicFindBySlugStatus404
      | PagesPublicFindBySlugStatus500
      | PagesPublicFindBySlugStatus501
    >,
    unknown
  >({ method: "GET", url: getPagesPublicFindBySlugUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
