/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementRenameFolderOptions,
  FileManagementRenameFolderResponses,
} from "../../models/fileManagement/FileManagementRenameFolder";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/folders/:id/rename}
 */
export function fileManagementRenameFolder<ThrowOnError extends boolean = true>(
  options: Options<FileManagementRenameFolderOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementRenameFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/file-management/folders/{id}/rename",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementRenameFolderResponses, ThrowOnError>>,
  );
}
