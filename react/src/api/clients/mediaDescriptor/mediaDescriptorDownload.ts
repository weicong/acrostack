/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MediaDescriptorDownloadOptions,
  MediaDescriptorDownloadResponses,
} from "../../models/mediaDescriptor/MediaDescriptorDownload";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit/media/:id}
 */
export function mediaDescriptorDownload<ThrowOnError extends boolean = true>(
  options: Options<MediaDescriptorDownloadOptions, ThrowOnError>,
): Promise<RequestResult<MediaDescriptorDownloadResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit/media/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MediaDescriptorDownloadResponses, ThrowOnError>>;
}
