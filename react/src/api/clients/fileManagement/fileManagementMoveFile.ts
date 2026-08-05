/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementMoveFilePathId,
  FileManagementMoveFileData,
  FileManagementMoveFileStatus200,
} from "../../models/fileManagement/FileManagementMoveFile.ts";

function getFileManagementMoveFileUrl(id: FileManagementMoveFilePathId) {
  const res = { method: "POST", url: `/api/app/file-management/files/${id}/move` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/move}
 */
export async function fileManagementMoveFile(
  id: FileManagementMoveFilePathId,
  data?: FileManagementMoveFileData,
  config: Partial<RequestConfig<FileManagementMoveFileData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    FileManagementMoveFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementMoveFileData
  >({
    method: "POST",
    url: getFileManagementMoveFileUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
