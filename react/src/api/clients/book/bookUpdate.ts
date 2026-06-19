/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BookUpdatePathId,
  BookUpdateData,
  BookUpdateStatus200,
  BookUpdateStatus400,
  BookUpdateStatus401,
  BookUpdateStatus403,
  BookUpdateStatus404,
  BookUpdateStatus500,
  BookUpdateStatus501,
} from "../../models/book/BookUpdate.ts";

function getBookUpdateUrl(id: BookUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/book/${id}` as const };

  return res;
}

/**
 * {@link /api/app/book/:id}
 */
export async function bookUpdate(
  id: BookUpdatePathId,
  data?: BookUpdateData,
  config: Partial<RequestConfig<BookUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BookUpdateStatus200,
    ResponseErrorConfig<
      | BookUpdateStatus400
      | BookUpdateStatus401
      | BookUpdateStatus403
      | BookUpdateStatus404
      | BookUpdateStatus500
      | BookUpdateStatus501
    >,
    BookUpdateData
  >({
    method: "PUT",
    url: getBookUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
