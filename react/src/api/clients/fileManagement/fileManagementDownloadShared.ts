/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementDownloadSharedPathToken,
  FileManagementDownloadSharedStatus200,
} from "../../models/fileManagement/FileManagementDownloadShared.ts";

function getFileManagementDownloadSharedUrl(token: FileManagementDownloadSharedPathToken) {
  const res = { method: "GET", url: `/api/app/file-management/shared/${token}` as const };

  return res;
}

/**
 * {@link /api/app/file-management/shared/:token}
 */
export async function fileManagementDownloadShared(
  token: FileManagementDownloadSharedPathToken,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementDownloadSharedStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "GET",
    url: getFileManagementDownloadSharedUrl(token).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
