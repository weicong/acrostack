/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementUploadFileQueryFolderId,
  FileManagementUploadFileData,
  FileManagementUploadFileStatus200,
} from "../../models/fileManagement/FileManagementUploadFile.ts";
import { buildFormData } from "../../.kubb/config.ts";

function getFileManagementUploadFileUrl() {
  const res = { method: "POST", url: `/api/app/file-management/files/upload` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/upload}
 */
export async function fileManagementUploadFile(
  data?: FileManagementUploadFileData,
  params?: { folderId?: FileManagementUploadFileQueryFolderId },
  config: Partial<RequestConfig<FileManagementUploadFileData>> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const requestData = data;
  const formData = buildFormData(requestData);

  const res = await request<
    FileManagementUploadFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementUploadFileData
  >({
    method: "POST",
    url: getFileManagementUploadFileUrl().url.toString(),
    params,
    data: formData as FormData,
    ...requestConfig,
  });

  return res.data;
}
