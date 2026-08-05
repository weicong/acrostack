/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementRestoreVersionPathId,
  FileManagementRestoreVersionPathVersionId,
  FileManagementRestoreVersionStatus200,
} from "../../models/fileManagement/FileManagementRestoreVersion.ts";

function getFileManagementRestoreVersionUrl(
  id: FileManagementRestoreVersionPathId,
  versionId: FileManagementRestoreVersionPathVersionId,
) {
  const res = {
    method: "POST",
    url: `/api/app/file-management/files/${id}/versions/${versionId}/restore` as const,
  };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/versions/:versionId/restore}
 */
export async function fileManagementRestoreVersion(
  id: FileManagementRestoreVersionPathId,
  versionId: FileManagementRestoreVersionPathVersionId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementRestoreVersionStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "POST",
    url: getFileManagementRestoreVersionUrl(id, versionId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
