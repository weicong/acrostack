/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementMoveFileOptions,
  FileManagementMoveFileResponses,
} from "../../models/fileManagement/FileManagementMoveFile";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/move}
 */
export function fileManagementMoveFile<ThrowOnError extends boolean = true>(
  options: Options<FileManagementMoveFileOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementMoveFileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/file-management/files/{id}/move",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementMoveFileResponses, ThrowOnError>>,
  );
}
