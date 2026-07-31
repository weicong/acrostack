/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogGetPathId,
  BlogGetStatus200,
  BlogGetStatus400,
  BlogGetStatus401,
  BlogGetStatus403,
  BlogGetStatus404,
  BlogGetStatus500,
  BlogGetStatus501,
} from "../../models/blog/BlogGet.ts";

function getBlogGetUrl(id: BlogGetPathId) {
  const res = { method: "GET", url: `/api/app/blog/${id}` as const };

  return res;
}

/**
 * {@link /api/app/blog/:id}
 */
export async function blogGet(
  id: BlogGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogGetStatus200,
    ResponseErrorConfig<
      | BlogGetStatus400
      | BlogGetStatus401
      | BlogGetStatus403
      | BlogGetStatus404
      | BlogGetStatus500
      | BlogGetStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
