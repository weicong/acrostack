/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementCreateFolderOptions, FileManagementCreateFolderResponses } from '../../models/fileManagement/FileManagementCreateFolder'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/folders}
 */
export function fileManagementCreateFolder<ThrowOnError extends boolean = true>(options: Options<FileManagementCreateFolderOptions, ThrowOnError>): Promise<RequestResult<FileManagementCreateFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/app/file-management/folders', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementCreateFolderResponses, ThrowOnError>>
}
