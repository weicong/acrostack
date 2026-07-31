/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogGetBySlugQuerySlug,
  BlogGetBySlugStatus200,
  BlogGetBySlugStatus400,
  BlogGetBySlugStatus401,
  BlogGetBySlugStatus403,
  BlogGetBySlugStatus404,
  BlogGetBySlugStatus500,
  BlogGetBySlugStatus501,
} from "../../models/blog/BlogGetBySlug.ts";

function getBlogGetBySlugUrl() {
  const res = { method: "GET", url: `/api/app/blog/by-slug` as const };

  return res;
}

/**
 * {@link /api/app/blog/by-slug}
 */
export async function blogGetBySlug(
  params?: { slug?: BlogGetBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogGetBySlugStatus200,
    ResponseErrorConfig<
      | BlogGetBySlugStatus400
      | BlogGetBySlugStatus401
      | BlogGetBySlugStatus403
      | BlogGetBySlugStatus404
      | BlogGetBySlugStatus500
      | BlogGetBySlugStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogGetBySlugUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
