/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type { FileManagementGetStorageInfoStatus200 } from "../../models/fileManagement/FileManagementGetStorageInfo.ts";

function getFileManagementGetStorageInfoUrl() {
  const res = { method: "GET", url: `/api/app/file-management/storage-info` as const };

  return res;
}

/**
 * {@link /api/app/file-management/storage-info}
 */
export async function fileManagementGetStorageInfo(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementGetStorageInfoStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({ method: "GET", url: getFileManagementGetStorageInfoUrl().url.toString(), ...requestConfig });

  return res.data;
}
