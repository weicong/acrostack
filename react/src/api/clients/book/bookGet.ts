/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BookGetPathId,
  BookGetStatus200,
  BookGetStatus400,
  BookGetStatus401,
  BookGetStatus403,
  BookGetStatus404,
  BookGetStatus500,
  BookGetStatus501,
} from "../../models/book/BookGet.ts";

function getBookGetUrl(id: BookGetPathId) {
  const res = { method: "GET", url: `/api/app/book/${id}` as const };

  return res;
}

/**
 * {@link /api/app/book/:id}
 */
export async function bookGet(
  id: BookGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BookGetStatus200,
    ResponseErrorConfig<
      | BookGetStatus400
      | BookGetStatus401
      | BookGetStatus403
      | BookGetStatus404
      | BookGetStatus500
      | BookGetStatus501
    >,
    unknown
  >({ method: "GET", url: getBookGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
