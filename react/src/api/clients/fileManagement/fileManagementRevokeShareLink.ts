/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  FileManagementRevokeShareLinkOptions,
  FileManagementRevokeShareLinkResponses,
} from "../../models/fileManagement/FileManagementRevokeShareLink";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/share-links/:id}
 */
export function fileManagementRevokeShareLink<ThrowOnError extends boolean = true>(
  options: Options<FileManagementRevokeShareLinkOptions, ThrowOnError>,
): Promise<RequestResult<FileManagementRevokeShareLinkResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/file-management/share-links/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<FileManagementRevokeShareLinkResponses, ThrowOnError>>;
}
