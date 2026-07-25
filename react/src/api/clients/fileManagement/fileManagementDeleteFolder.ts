/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementDeleteFolderPathId,
  FileManagementDeleteFolderStatus200,
} from "../../models/fileManagement/FileManagementDeleteFolder.ts";

function getFileManagementDeleteFolderUrl(id: FileManagementDeleteFolderPathId) {
  const res = { method: "DELETE", url: `/api/app/file-management/folders/${id}` as const };

  return res;
}

/**
 * {@link /api/app/file-management/folders/:id}
 */
export async function fileManagementDeleteFolder(
  id: FileManagementDeleteFolderPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementDeleteFolderStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "DELETE",
    url: getFileManagementDeleteFolderUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
