/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementGetFilesOptions, FileManagementGetFilesResponses } from '../../models/fileManagement/FileManagementGetFiles'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/files}
 */
export function fileManagementGetFiles<ThrowOnError extends boolean = true>(options: Options<FileManagementGetFilesOptions, ThrowOnError> = {}): Promise<RequestResult<FileManagementGetFilesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/file-management/files', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementGetFilesResponses, ThrowOnError>>
}
