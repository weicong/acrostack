/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MediaDescriptorAdminCreatePathEntityType,
  MediaDescriptorAdminCreateQueryName,
  MediaDescriptorAdminCreateData,
  MediaDescriptorAdminCreateStatus200,
  MediaDescriptorAdminCreateStatus400,
  MediaDescriptorAdminCreateStatus401,
  MediaDescriptorAdminCreateStatus403,
  MediaDescriptorAdminCreateStatus404,
  MediaDescriptorAdminCreateStatus500,
  MediaDescriptorAdminCreateStatus501,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminCreate.ts";
import { buildFormData } from "../../.kubb/config.ts";

function getMediaDescriptorAdminCreateUrl(entityType: MediaDescriptorAdminCreatePathEntityType) {
  const res = { method: "POST", url: `/api/cms-kit-admin/media/${entityType}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/media/:entityType}
 */
export async function mediaDescriptorAdminCreate(
  entityType: MediaDescriptorAdminCreatePathEntityType,
  params: { Name: MediaDescriptorAdminCreateQueryName },
  data?: MediaDescriptorAdminCreateData,
  config: Partial<RequestConfig<MediaDescriptorAdminCreateData>> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const requestData = data;
  const formData = buildFormData(requestData);

  const res = await request<
    MediaDescriptorAdminCreateStatus200,
    ResponseErrorConfig<
      | MediaDescriptorAdminCreateStatus400
      | MediaDescriptorAdminCreateStatus401
      | MediaDescriptorAdminCreateStatus403
      | MediaDescriptorAdminCreateStatus404
      | MediaDescriptorAdminCreateStatus500
      | MediaDescriptorAdminCreateStatus501
    >,
    MediaDescriptorAdminCreateData
  >({
    method: "POST",
    url: getMediaDescriptorAdminCreateUrl(entityType).url.toString(),
    params,
    data: formData as FormData,
    ...requestConfig,
  });

  return res.data;
}
