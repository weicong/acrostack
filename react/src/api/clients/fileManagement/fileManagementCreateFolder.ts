/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementCreateFolderData,
  FileManagementCreateFolderStatus200,
} from "../../models/fileManagement/FileManagementCreateFolder.ts";

function getFileManagementCreateFolderUrl() {
  const res = { method: "POST", url: `/api/app/file-management/folders` as const };

  return res;
}

/**
 * {@link /api/app/file-management/folders}
 */
export async function fileManagementCreateFolder(
  data?: FileManagementCreateFolderData,
  config: Partial<RequestConfig<FileManagementCreateFolderData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    FileManagementCreateFolderStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateFolderData
  >({
    method: "POST",
    url: getFileManagementCreateFolderUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
