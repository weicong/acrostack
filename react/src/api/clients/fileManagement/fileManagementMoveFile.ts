/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementMoveFileOptions, FileManagementMoveFileResponses } from '../../models/fileManagement/FileManagementMoveFile'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/files/:id/move}
 */
export function fileManagementMoveFile<ThrowOnError extends boolean = true>(options: Options<FileManagementMoveFileOptions, ThrowOnError>): Promise<RequestResult<FileManagementMoveFileResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/app/file-management/files/{id}/move', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementMoveFileResponses, ThrowOnError>>
}
