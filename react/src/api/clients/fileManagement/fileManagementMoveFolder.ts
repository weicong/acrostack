/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  FileManagementMoveFolderOptions,
  FileManagementMoveFolderResponses,
} from "../../models/fileManagement/FileManagementMoveFolder";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/folders/:id/move}
 */
export function fileManagementMoveFolder<ThrowOnError extends boolean = true>(
  options: Options<FileManagementMoveFolderOptions, ThrowOnError>,
): Promise<RequestResult<FileManagementMoveFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/file-management/folders/{id}/move",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<FileManagementMoveFolderResponses, ThrowOnError>>;
}
