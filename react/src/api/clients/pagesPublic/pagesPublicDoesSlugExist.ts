/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PagesPublicDoesSlugExistQuerySlug,
  PagesPublicDoesSlugExistStatus200,
  PagesPublicDoesSlugExistStatus400,
  PagesPublicDoesSlugExistStatus401,
  PagesPublicDoesSlugExistStatus403,
  PagesPublicDoesSlugExistStatus404,
  PagesPublicDoesSlugExistStatus500,
  PagesPublicDoesSlugExistStatus501,
} from "../../models/pagesPublic/PagesPublicDoesSlugExist.ts";

function getPagesPublicDoesSlugExistUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/pages/exist` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/pages/exist}
 */
export async function pagesPublicDoesSlugExist(
  params?: { slug?: PagesPublicDoesSlugExistQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PagesPublicDoesSlugExistStatus200,
    ResponseErrorConfig<
      | PagesPublicDoesSlugExistStatus400
      | PagesPublicDoesSlugExistStatus401
      | PagesPublicDoesSlugExistStatus403
      | PagesPublicDoesSlugExistStatus404
      | PagesPublicDoesSlugExistStatus500
      | PagesPublicDoesSlugExistStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPagesPublicDoesSlugExistUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
