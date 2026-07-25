/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementDownloadFilePathId,
  FileManagementDownloadFileStatus200,
} from "../../models/fileManagement/FileManagementDownloadFile.ts";

function getFileManagementDownloadFileUrl(id: FileManagementDownloadFilePathId) {
  const res = { method: "GET", url: `/api/app/file-management/files/${id}/download` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/download}
 */
export async function fileManagementDownloadFile(
  id: FileManagementDownloadFilePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementDownloadFileStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({ method: "GET", url: getFileManagementDownloadFileUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
