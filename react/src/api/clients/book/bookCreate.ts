/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BookCreateData,
  BookCreateStatus200,
  BookCreateStatus400,
  BookCreateStatus401,
  BookCreateStatus403,
  BookCreateStatus404,
  BookCreateStatus500,
  BookCreateStatus501,
} from "../../models/book/BookCreate.ts";

function getBookCreateUrl() {
  const res = { method: "POST", url: `/api/app/book` as const };

  return res;
}

/**
 * {@link /api/app/book}
 */
export async function bookCreate(
  data?: BookCreateData,
  config: Partial<RequestConfig<BookCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BookCreateStatus200,
    ResponseErrorConfig<
      | BookCreateStatus400
      | BookCreateStatus401
      | BookCreateStatus403
      | BookCreateStatus404
      | BookCreateStatus500
      | BookCreateStatus501
    >,
    BookCreateData
  >({
    method: "POST",
    url: getBookCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
