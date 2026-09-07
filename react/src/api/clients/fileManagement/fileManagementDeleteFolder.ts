/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementDeleteFolderOptions,
  FileManagementDeleteFolderResponses,
} from "../../models/fileManagement/FileManagementDeleteFolder";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/folders/:id}
 */
export function fileManagementDeleteFolder<ThrowOnError extends boolean = true>(
  options: Options<FileManagementDeleteFolderOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementDeleteFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/file-management/folders/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementDeleteFolderResponses, ThrowOnError>>,
  );
}
