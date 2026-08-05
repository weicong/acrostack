/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PagesPublicFindDefaultHomePageStatus200,
  PagesPublicFindDefaultHomePageStatus400,
  PagesPublicFindDefaultHomePageStatus401,
  PagesPublicFindDefaultHomePageStatus403,
  PagesPublicFindDefaultHomePageStatus404,
  PagesPublicFindDefaultHomePageStatus500,
  PagesPublicFindDefaultHomePageStatus501,
} from "../../models/pagesPublic/PagesPublicFindDefaultHomePage.ts";

function getPagesPublicFindDefaultHomePageUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/pages/home` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/pages/home}
 */
export async function pagesPublicFindDefaultHomePage(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PagesPublicFindDefaultHomePageStatus200,
    ResponseErrorConfig<
      | PagesPublicFindDefaultHomePageStatus400
      | PagesPublicFindDefaultHomePageStatus401
      | PagesPublicFindDefaultHomePageStatus403
      | PagesPublicFindDefaultHomePageStatus404
      | PagesPublicFindDefaultHomePageStatus500
      | PagesPublicFindDefaultHomePageStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getPagesPublicFindDefaultHomePageUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
