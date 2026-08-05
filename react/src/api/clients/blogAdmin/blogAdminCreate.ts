/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminCreateData,
  BlogAdminCreateStatus200,
  BlogAdminCreateStatus400,
  BlogAdminCreateStatus401,
  BlogAdminCreateStatus403,
  BlogAdminCreateStatus404,
  BlogAdminCreateStatus500,
  BlogAdminCreateStatus501,
} from "../../models/blogAdmin/BlogAdminCreate.ts";

function getBlogAdminCreateUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/blogs` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export async function blogAdminCreate(
  data?: BlogAdminCreateData,
  config: Partial<RequestConfig<BlogAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogAdminCreateStatus400
      | BlogAdminCreateStatus401
      | BlogAdminCreateStatus403
      | BlogAdminCreateStatus404
      | BlogAdminCreateStatus500
      | BlogAdminCreateStatus501
    >,
    BlogAdminCreateData
  >({
    method: "POST",
    url: getBlogAdminCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
