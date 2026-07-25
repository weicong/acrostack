/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementDeleteFilePathId,
  FileManagementDeleteFileStatus200,
} from "../../models/fileManagement/FileManagementDeleteFile.ts";

function getFileManagementDeleteFileUrl(id: FileManagementDeleteFilePathId) {
  const res = { method: "DELETE", url: `/api/app/file-management/files/${id}` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id}
 */
export async function fileManagementDeleteFile(
  id: FileManagementDeleteFilePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<FileManagementDeleteFileStatus200, ResponseErrorConfig<Error>, unknown>(
    { method: "DELETE", url: getFileManagementDeleteFileUrl(id).url.toString(), ...requestConfig },
  );

  return res.data;
}
