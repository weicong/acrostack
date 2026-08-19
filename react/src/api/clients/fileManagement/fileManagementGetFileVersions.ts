/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementGetFileVersionsOptions, FileManagementGetFileVersionsResponses } from '../../models/fileManagement/FileManagementGetFileVersions'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/files/:id/versions}
 */
export function fileManagementGetFileVersions<ThrowOnError extends boolean = true>(options: Options<FileManagementGetFileVersionsOptions, ThrowOnError>): Promise<RequestResult<FileManagementGetFileVersionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/file-management/files/{id}/versions', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementGetFileVersionsResponses, ThrowOnError>>
}
