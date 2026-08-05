/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagAdminCreateData,
  TagAdminCreateStatus200,
  TagAdminCreateStatus400,
  TagAdminCreateStatus401,
  TagAdminCreateStatus403,
  TagAdminCreateStatus404,
  TagAdminCreateStatus500,
  TagAdminCreateStatus501,
} from "../../models/tagAdmin/TagAdminCreate.ts";

function getTagAdminCreateUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/tags` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/tags}
 */
export async function tagAdminCreate(
  data?: TagAdminCreateData,
  config: Partial<RequestConfig<TagAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    TagAdminCreateStatus200,
    ResponseErrorConfig<
      | TagAdminCreateStatus400
      | TagAdminCreateStatus401
      | TagAdminCreateStatus403
      | TagAdminCreateStatus404
      | TagAdminCreateStatus500
      | TagAdminCreateStatus501
    >,
    TagAdminCreateData
  >({
    method: "POST",
    url: getTagAdminCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
