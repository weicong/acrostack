/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementGetThumbnailOptions,
  FileManagementGetThumbnailResponses,
} from "../../models/fileManagement/FileManagementGetThumbnail";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/thumbnail}
 */
export function fileManagementGetThumbnail<ThrowOnError extends boolean = true>(
  options: Options<FileManagementGetThumbnailOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementGetThumbnailResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/file-management/files/{id}/thumbnail",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementGetThumbnailResponses, ThrowOnError>>,
  );
}
