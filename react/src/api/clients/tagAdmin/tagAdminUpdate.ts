/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagAdminUpdatePathId,
  TagAdminUpdateData,
  TagAdminUpdateStatus200,
  TagAdminUpdateStatus400,
  TagAdminUpdateStatus401,
  TagAdminUpdateStatus403,
  TagAdminUpdateStatus404,
  TagAdminUpdateStatus500,
  TagAdminUpdateStatus501,
} from "../../models/tagAdmin/TagAdminUpdate.ts";

function getTagAdminUpdateUrl(id: TagAdminUpdatePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/tags/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/tags/:id}
 */
export async function tagAdminUpdate(
  id: TagAdminUpdatePathId,
  data?: TagAdminUpdateData,
  config: Partial<RequestConfig<TagAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    TagAdminUpdateStatus200,
    ResponseErrorConfig<
      | TagAdminUpdateStatus400
      | TagAdminUpdateStatus401
      | TagAdminUpdateStatus403
      | TagAdminUpdateStatus404
      | TagAdminUpdateStatus500
      | TagAdminUpdateStatus501
    >,
    TagAdminUpdateData
  >({
    method: "PUT",
    url: getTagAdminUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
