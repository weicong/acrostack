/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogCreateData,
  BlogCreateStatus200,
  BlogCreateStatus400,
  BlogCreateStatus401,
  BlogCreateStatus403,
  BlogCreateStatus404,
  BlogCreateStatus500,
  BlogCreateStatus501,
} from "../../models/blog/BlogCreate.ts";

function getBlogCreateUrl() {
  const res = { method: "POST", url: `/api/app/blog` as const };

  return res;
}

/**
 * {@link /api/app/blog}
 */
export async function blogCreate(
  data?: BlogCreateData,
  config: Partial<RequestConfig<BlogCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogCreateStatus200,
    ResponseErrorConfig<
      | BlogCreateStatus400
      | BlogCreateStatus401
      | BlogCreateStatus403
      | BlogCreateStatus404
      | BlogCreateStatus500
      | BlogCreateStatus501
    >,
    BlogCreateData
  >({
    method: "POST",
    url: getBlogCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
