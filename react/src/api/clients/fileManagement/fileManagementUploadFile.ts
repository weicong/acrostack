/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementUploadFileOptions, FileManagementUploadFileResponses } from '../../models/fileManagement/FileManagementUploadFile'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/files/upload}
 */
export function fileManagementUploadFile<ThrowOnError extends boolean = true>(options: Options<FileManagementUploadFileOptions, ThrowOnError>): Promise<RequestResult<FileManagementUploadFileResponses, ThrowOnError>> {
  const { client: request = client, contentType, ...config } = options

  return request({ method: 'POST', url: '/api/app/file-management/files/upload', security: [{ type: 'oauth2' }], contentType: { request: 'multipart/form-data', ...(typeof contentType === 'string' ? { request: contentType } : contentType) }, ...config }) as Promise<RequestResult<FileManagementUploadFileResponses, ThrowOnError>>
}
