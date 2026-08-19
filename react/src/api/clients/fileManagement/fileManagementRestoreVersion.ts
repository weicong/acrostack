/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  FileManagementRestoreVersionOptions,
  FileManagementRestoreVersionResponses,
} from "../../models/fileManagement/FileManagementRestoreVersion";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/versions/:versionId/restore}
 */
export function fileManagementRestoreVersion<ThrowOnError extends boolean = true>(
  options: Options<FileManagementRestoreVersionOptions, ThrowOnError>,
): Promise<RequestResult<FileManagementRestoreVersionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/file-management/files/{id}/versions/{versionId}/restore",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<FileManagementRestoreVersionResponses, ThrowOnError>>;
}
