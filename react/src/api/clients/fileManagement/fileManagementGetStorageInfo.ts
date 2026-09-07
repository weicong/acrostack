/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementGetStorageInfoOptions,
  FileManagementGetStorageInfoResponses,
} from "../../models/fileManagement/FileManagementGetStorageInfo";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/storage-info}
 */
export function fileManagementGetStorageInfo<ThrowOnError extends boolean = true>(
  options: Options<FileManagementGetStorageInfoOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<FileManagementGetStorageInfoResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/file-management/storage-info",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementGetStorageInfoResponses, ThrowOnError>>,
  );
}
