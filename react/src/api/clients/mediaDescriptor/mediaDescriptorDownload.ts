/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MediaDescriptorDownloadPathId,
  MediaDescriptorDownloadStatus200,
  MediaDescriptorDownloadStatus400,
  MediaDescriptorDownloadStatus401,
  MediaDescriptorDownloadStatus403,
  MediaDescriptorDownloadStatus404,
  MediaDescriptorDownloadStatus500,
  MediaDescriptorDownloadStatus501,
} from "../../models/mediaDescriptor/MediaDescriptorDownload.ts";

function getMediaDescriptorDownloadUrl(id: MediaDescriptorDownloadPathId) {
  const res = { method: "GET", url: `/api/cms-kit/media/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit/media/:id}
 */
export async function mediaDescriptorDownload(
  id: MediaDescriptorDownloadPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MediaDescriptorDownloadStatus200,
    ResponseErrorConfig<
      | MediaDescriptorDownloadStatus400
      | MediaDescriptorDownloadStatus401
      | MediaDescriptorDownloadStatus403
      | MediaDescriptorDownloadStatus404
      | MediaDescriptorDownloadStatus500
      | MediaDescriptorDownloadStatus501
    >,
    unknown
  >({ method: "GET", url: getMediaDescriptorDownloadUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
