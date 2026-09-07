/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementDeleteFileOptions,
  FileManagementDeleteFileResponses,
} from "../../models/fileManagement/FileManagementDeleteFile";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id}
 */
export function fileManagementDeleteFile<ThrowOnError extends boolean = true>(
  options: Options<FileManagementDeleteFileOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementDeleteFileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/file-management/files/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementDeleteFileResponses, ThrowOnError>>,
  );
}
