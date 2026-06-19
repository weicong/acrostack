/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BookDeletePathId,
  BookDeleteStatus200,
  BookDeleteStatus204,
  BookDeleteStatus400,
  BookDeleteStatus401,
  BookDeleteStatus403,
  BookDeleteStatus404,
  BookDeleteStatus500,
  BookDeleteStatus501,
} from "../../models/book/BookDelete.ts";

function getBookDeleteUrl(id: BookDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/book/${id}` as const };

  return res;
}

/**
 * {@link /api/app/book/:id}
 */
export async function bookDelete(
  id: BookDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BookDeleteStatus200 | BookDeleteStatus204,
    ResponseErrorConfig<
      | BookDeleteStatus400
      | BookDeleteStatus401
      | BookDeleteStatus403
      | BookDeleteStatus404
      | BookDeleteStatus500
      | BookDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBookDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
