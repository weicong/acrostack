/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MediaDescriptorAdminDeletePathId,
  MediaDescriptorAdminDeleteStatus200,
  MediaDescriptorAdminDeleteStatus204,
  MediaDescriptorAdminDeleteStatus400,
  MediaDescriptorAdminDeleteStatus401,
  MediaDescriptorAdminDeleteStatus403,
  MediaDescriptorAdminDeleteStatus404,
  MediaDescriptorAdminDeleteStatus500,
  MediaDescriptorAdminDeleteStatus501,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminDelete.ts";

function getMediaDescriptorAdminDeleteUrl(id: MediaDescriptorAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/media/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/media/:id}
 */
export async function mediaDescriptorAdminDelete(
  id: MediaDescriptorAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MediaDescriptorAdminDeleteStatus200 | MediaDescriptorAdminDeleteStatus204,
    ResponseErrorConfig<
      | MediaDescriptorAdminDeleteStatus400
      | MediaDescriptorAdminDeleteStatus401
      | MediaDescriptorAdminDeleteStatus403
      | MediaDescriptorAdminDeleteStatus404
      | MediaDescriptorAdminDeleteStatus500
      | MediaDescriptorAdminDeleteStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getMediaDescriptorAdminDeleteUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
