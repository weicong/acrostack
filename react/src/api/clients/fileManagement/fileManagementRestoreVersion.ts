/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementRestoreVersionOptions,
  FileManagementRestoreVersionResponses,
} from "../../models/fileManagement/FileManagementRestoreVersion";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/versions/:versionId/restore}
 */
export function fileManagementRestoreVersion<ThrowOnError extends boolean = true>(
  options: Options<FileManagementRestoreVersionOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementRestoreVersionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/file-management/files/{id}/versions/{versionId}/restore",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementRestoreVersionResponses, ThrowOnError>>,
  );
}
