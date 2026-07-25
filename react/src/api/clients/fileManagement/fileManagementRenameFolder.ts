/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementRenameFolderPathId,
  FileManagementRenameFolderData,
  FileManagementRenameFolderStatus200,
} from "../../models/fileManagement/FileManagementRenameFolder.ts";

function getFileManagementRenameFolderUrl(id: FileManagementRenameFolderPathId) {
  const res = { method: "PUT", url: `/api/app/file-management/folders/${id}/rename` as const };

  return res;
}

/**
 * {@link /api/app/file-management/folders/:id/rename}
 */
export async function fileManagementRenameFolder(
  id: FileManagementRenameFolderPathId,
  data?: FileManagementRenameFolderData,
  config: Partial<RequestConfig<FileManagementRenameFolderData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    FileManagementRenameFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementRenameFolderData
  >({
    method: "PUT",
    url: getFileManagementRenameFolderUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
