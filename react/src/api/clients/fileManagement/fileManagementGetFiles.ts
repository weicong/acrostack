/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementGetFilesQueryFolderId,
  FileManagementGetFilesStatus200,
} from "../../models/fileManagement/FileManagementGetFiles.ts";

function getFileManagementGetFilesUrl() {
  const res = { method: "GET", url: `/api/app/file-management/files` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files}
 */
export async function fileManagementGetFiles(
  params?: { folderId?: FileManagementGetFilesQueryFolderId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<FileManagementGetFilesStatus200, ResponseErrorConfig<Error>, unknown>({
    method: "GET",
    url: getFileManagementGetFilesUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
