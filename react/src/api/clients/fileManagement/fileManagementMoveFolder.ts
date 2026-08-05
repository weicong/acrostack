/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementMoveFolderPathId,
  FileManagementMoveFolderData,
  FileManagementMoveFolderStatus200,
} from "../../models/fileManagement/FileManagementMoveFolder.ts";

function getFileManagementMoveFolderUrl(id: FileManagementMoveFolderPathId) {
  const res = { method: "POST", url: `/api/app/file-management/folders/${id}/move` as const };

  return res;
}

/**
 * {@link /api/app/file-management/folders/:id/move}
 */
export async function fileManagementMoveFolder(
  id: FileManagementMoveFolderPathId,
  data?: FileManagementMoveFolderData,
  config: Partial<RequestConfig<FileManagementMoveFolderData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    FileManagementMoveFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementMoveFolderData
  >({
    method: "POST",
    url: getFileManagementMoveFolderUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
