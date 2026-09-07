/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementGetFilesOptions,
  FileManagementGetFilesResponses,
} from "../../models/fileManagement/FileManagementGetFiles";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files}
 */
export function fileManagementGetFiles<ThrowOnError extends boolean = true>(
  options: Options<FileManagementGetFilesOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<FileManagementGetFilesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/file-management/files",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementGetFilesResponses, ThrowOnError>>,
  );
}
