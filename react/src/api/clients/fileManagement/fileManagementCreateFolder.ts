/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementCreateFolderOptions,
  FileManagementCreateFolderResponses,
} from "../../models/fileManagement/FileManagementCreateFolder";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/folders}
 */
export function fileManagementCreateFolder<ThrowOnError extends boolean = true>(
  options: Options<FileManagementCreateFolderOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementCreateFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/file-management/folders",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementCreateFolderResponses, ThrowOnError>>,
  );
}
