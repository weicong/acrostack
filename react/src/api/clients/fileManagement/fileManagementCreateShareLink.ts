/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementCreateShareLinkPathId,
  FileManagementCreateShareLinkData,
  FileManagementCreateShareLinkStatus200,
} from "../../models/fileManagement/FileManagementCreateShareLink.ts";

function getFileManagementCreateShareLinkUrl(id: FileManagementCreateShareLinkPathId) {
  const res = { method: "POST", url: `/api/app/file-management/files/${id}/share-links` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export async function fileManagementCreateShareLink(
  id: FileManagementCreateShareLinkPathId,
  data?: FileManagementCreateShareLinkData,
  config: Partial<RequestConfig<FileManagementCreateShareLinkData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    FileManagementCreateShareLinkStatus200,
    ResponseErrorConfig<Error>,
    FileManagementCreateShareLinkData
  >({
    method: "POST",
    url: getFileManagementCreateShareLinkUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
