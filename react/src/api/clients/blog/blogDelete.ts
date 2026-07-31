/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogDeletePathId,
  BlogDeleteStatus200,
  BlogDeleteStatus204,
  BlogDeleteStatus400,
  BlogDeleteStatus401,
  BlogDeleteStatus403,
  BlogDeleteStatus404,
  BlogDeleteStatus500,
  BlogDeleteStatus501,
} from "../../models/blog/BlogDelete.ts";

function getBlogDeleteUrl(id: BlogDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/blog/${id}` as const };

  return res;
}

/**
 * {@link /api/app/blog/:id}
 */
export async function blogDelete(
  id: BlogDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogDeleteStatus200 | BlogDeleteStatus204,
    ResponseErrorConfig<
      | BlogDeleteStatus400
      | BlogDeleteStatus401
      | BlogDeleteStatus403
      | BlogDeleteStatus404
      | BlogDeleteStatus500
      | BlogDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBlogDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
