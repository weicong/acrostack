/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MediaDescriptorDownloadOptions,
  MediaDescriptorDownloadResponses,
} from "../../models/mediaDescriptor/MediaDescriptorDownload";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit/media/:id}
 */
export function mediaDescriptorDownload<ThrowOnError extends boolean = true>(
  options: Options<MediaDescriptorDownloadOptions, ThrowOnError>,
): Unwrappable<RequestResult<MediaDescriptorDownloadResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit/media/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MediaDescriptorDownloadResponses, ThrowOnError>>,
  );
}
