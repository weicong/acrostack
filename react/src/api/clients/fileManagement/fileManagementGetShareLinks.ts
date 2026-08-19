/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FileManagementGetShareLinksOptions, FileManagementGetShareLinksResponses } from '../../models/fileManagement/FileManagementGetShareLinks'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export function fileManagementGetShareLinks<ThrowOnError extends boolean = true>(options: Options<FileManagementGetShareLinksOptions, ThrowOnError>): Promise<RequestResult<FileManagementGetShareLinksResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/file-management/files/{id}/share-links', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FileManagementGetShareLinksResponses, ThrowOnError>>
}
