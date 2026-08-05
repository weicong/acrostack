/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementGetFileVersionsPathId,
  FileManagementGetFileVersionsStatus200,
} from "../../models/fileManagement/FileManagementGetFileVersions.ts";

function getFileManagementGetFileVersionsUrl(id: FileManagementGetFileVersionsPathId) {
  const res = { method: "GET", url: `/api/app/file-management/files/${id}/versions` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/versions}
 */
export async function fileManagementGetFileVersions(
  id: FileManagementGetFileVersionsPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementGetFileVersionsStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "GET",
    url: getFileManagementGetFileVersionsUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
