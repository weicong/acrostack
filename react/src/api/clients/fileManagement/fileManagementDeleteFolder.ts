/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  FileManagementDeleteFolderOptions,
  FileManagementDeleteFolderResponses,
} from "../../models/fileManagement/FileManagementDeleteFolder";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/folders/:id}
 */
export function fileManagementDeleteFolder<ThrowOnError extends boolean = true>(
  options: Options<FileManagementDeleteFolderOptions, ThrowOnError>,
): Promise<RequestResult<FileManagementDeleteFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/file-management/folders/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<FileManagementDeleteFolderResponses, ThrowOnError>>;
}
