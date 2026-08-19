/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  FileManagementDeleteFileOptions,
  FileManagementDeleteFileResponses,
} from "../../models/fileManagement/FileManagementDeleteFile";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id}
 */
export function fileManagementDeleteFile<ThrowOnError extends boolean = true>(
  options: Options<FileManagementDeleteFileOptions, ThrowOnError>,
): Promise<RequestResult<FileManagementDeleteFileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/file-management/files/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<FileManagementDeleteFileResponses, ThrowOnError>>;
}
