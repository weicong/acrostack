/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementGetThumbnailPathId,
  FileManagementGetThumbnailStatus200,
} from "../../models/fileManagement/FileManagementGetThumbnail.ts";

function getFileManagementGetThumbnailUrl(id: FileManagementGetThumbnailPathId) {
  const res = { method: "GET", url: `/api/app/file-management/files/${id}/thumbnail` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/thumbnail}
 */
export async function fileManagementGetThumbnail(
  id: FileManagementGetThumbnailPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementGetThumbnailStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({ method: "GET", url: getFileManagementGetThumbnailUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
