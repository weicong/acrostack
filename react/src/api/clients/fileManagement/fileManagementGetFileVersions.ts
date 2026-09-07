/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementGetFileVersionsOptions,
  FileManagementGetFileVersionsResponses,
} from "../../models/fileManagement/FileManagementGetFileVersions";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/versions}
 */
export function fileManagementGetFileVersions<ThrowOnError extends boolean = true>(
  options: Options<FileManagementGetFileVersionsOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementGetFileVersionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/file-management/files/{id}/versions",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementGetFileVersionsResponses, ThrowOnError>>,
  );
}
