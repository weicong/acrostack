/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementDownloadFileOptions,
  FileManagementDownloadFileResponses,
} from "../../models/fileManagement/FileManagementDownloadFile";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/download}
 */
export function fileManagementDownloadFile<ThrowOnError extends boolean = true>(
  options: Options<FileManagementDownloadFileOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementDownloadFileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/file-management/files/{id}/download",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementDownloadFileResponses, ThrowOnError>>,
  );
}
