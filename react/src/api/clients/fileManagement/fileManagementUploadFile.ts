/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementUploadFileOptions,
  FileManagementUploadFileResponses,
} from "../../models/fileManagement/FileManagementUploadFile";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/upload}
 */
export function fileManagementUploadFile<ThrowOnError extends boolean = true>(
  options: Options<FileManagementUploadFileOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementUploadFileResponses, ThrowOnError>> {
  const { client: request = client, contentType, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/file-management/files/upload",
      security: [{ type: "oauth2" }],
      contentType: {
        request: "multipart/form-data",
        ...(typeof contentType === "string" ? { request: contentType } : contentType),
      },
      ...config,
    }) as Promise<RequestResult<FileManagementUploadFileResponses, ThrowOnError>>,
  );
}
