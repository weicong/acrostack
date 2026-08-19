/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementDownloadSharedOptions, FileManagementDownloadSharedResponses } from '../../models/fileManagement/FileManagementDownloadShared'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/shared/:token}
 */
export function fileManagementDownloadShared<ThrowOnError extends boolean = true>(options: Options<FileManagementDownloadSharedOptions, ThrowOnError>): Promise<RequestResult<FileManagementDownloadSharedResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/file-management/shared/{token}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementDownloadSharedResponses, ThrowOnError>>
}
