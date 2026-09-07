/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FileManagementCreateShareLinkOptions,
  FileManagementCreateShareLinkResponses,
} from "../../models/fileManagement/FileManagementCreateShareLink";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export function fileManagementCreateShareLink<ThrowOnError extends boolean = true>(
  options: Options<FileManagementCreateShareLinkOptions, ThrowOnError>,
): Unwrappable<RequestResult<FileManagementCreateShareLinkResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/file-management/files/{id}/share-links",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FileManagementCreateShareLinkResponses, ThrowOnError>>,
  );
}
