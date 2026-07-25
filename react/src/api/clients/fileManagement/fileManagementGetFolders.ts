/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementGetFoldersQueryParentId,
  FileManagementGetFoldersStatus200,
} from "../../models/fileManagement/FileManagementGetFolders.ts";

function getFileManagementGetFoldersUrl() {
  const res = { method: "GET", url: `/api/app/file-management/folders` as const };

  return res;
}

/**
 * {@link /api/app/file-management/folders}
 */
export async function fileManagementGetFolders(
  params?: { parentId?: FileManagementGetFoldersQueryParentId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<FileManagementGetFoldersStatus200, ResponseErrorConfig<Error>, unknown>(
    {
      method: "GET",
      url: getFileManagementGetFoldersUrl().url.toString(),
      params,
      ...requestConfig,
    },
  );

  return res.data;
}
