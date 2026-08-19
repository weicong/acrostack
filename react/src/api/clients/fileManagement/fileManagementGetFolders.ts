/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  FileManagementGetFoldersOptions,
  FileManagementGetFoldersResponses,
} from "../../models/fileManagement/FileManagementGetFolders";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/folders}
 */
export function fileManagementGetFolders<ThrowOnError extends boolean = true>(
  options: Options<FileManagementGetFoldersOptions, ThrowOnError> = {},
): Promise<RequestResult<FileManagementGetFoldersResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/file-management/folders",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<FileManagementGetFoldersResponses, ThrowOnError>>;
}
