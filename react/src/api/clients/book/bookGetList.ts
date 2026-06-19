/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BookGetListQuerySorting,
  BookGetListQuerySkipCount,
  BookGetListQueryMaxResultCount,
  BookGetListStatus200,
  BookGetListStatus400,
  BookGetListStatus401,
  BookGetListStatus403,
  BookGetListStatus404,
  BookGetListStatus500,
  BookGetListStatus501,
} from "../../models/book/BookGetList.ts";

function getBookGetListUrl() {
  const res = { method: "GET", url: `/api/app/book` as const };

  return res;
}

/**
 * {@link /api/app/book}
 */
export async function bookGetList(
  params?: {
    Sorting?: BookGetListQuerySorting;
    SkipCount?: BookGetListQuerySkipCount;
    MaxResultCount?: BookGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BookGetListStatus200,
    ResponseErrorConfig<
      | BookGetListStatus400
      | BookGetListStatus401
      | BookGetListStatus403
      | BookGetListStatus404
      | BookGetListStatus500
      | BookGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBookGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
