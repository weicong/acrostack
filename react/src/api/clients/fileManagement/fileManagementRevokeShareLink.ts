/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  FileManagementRevokeShareLinkPathId,
  FileManagementRevokeShareLinkStatus200,
} from "../../models/fileManagement/FileManagementRevokeShareLink.ts";

function getFileManagementRevokeShareLinkUrl(id: FileManagementRevokeShareLinkPathId) {
  const res = { method: "DELETE", url: `/api/app/file-management/share-links/${id}` as const };

  return res;
}

/**
 * {@link /api/app/file-management/share-links/:id}
 */
export async function fileManagementRevokeShareLink(
  id: FileManagementRevokeShareLinkPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    FileManagementRevokeShareLinkStatus200,
    ResponseErrorConfig<Error>,
    unknown
  >({
    method: "DELETE",
    url: getFileManagementRevokeShareLinkUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
