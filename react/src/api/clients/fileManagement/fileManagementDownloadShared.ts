/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementDownloadSharedOptions,
  FileManagementDownloadSharedResponses,
} from "../../models/fileManagement/FileManagementDownloadShared";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/shared/:token}
 */
export function fileManagementDownloadShared<ThrowOnError extends boolean = true>(
  options: Options<FileManagementDownloadSharedOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementDownloadSharedResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/file-management/shared/{token}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementDownloadSharedResponses, ThrowOnError>>,
  );
}
