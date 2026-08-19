/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementRenameFolderOptions, FileManagementRenameFolderResponses } from '../../models/fileManagement/FileManagementRenameFolder'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/folders/:id/rename}
 */
export function fileManagementRenameFolder<ThrowOnError extends boolean = true>(options: Options<FileManagementRenameFolderOptions, ThrowOnError>): Promise<RequestResult<FileManagementRenameFolderResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/app/file-management/folders/{id}/rename', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementRenameFolderResponses, ThrowOnError>>
}
