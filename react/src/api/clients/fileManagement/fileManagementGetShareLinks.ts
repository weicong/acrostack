/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementGetShareLinksPathId,
  FileManagementGetShareLinksStatus200,
} from "../../models/fileManagement/FileManagementGetShareLinks.ts";

function getFileManagementGetShareLinksUrl(id: FileManagementGetShareLinksPathId) {
  const res = { method: "GET", url: `/api/app/file-management/files/${id}/share-links` as const };

  return res;
}

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export async function fileManagementGetShareLinks(
  id: FileManagementGetShareLinksPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementGetShareLinksStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({ method: "GET", url: getFileManagementGetShareLinksUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
