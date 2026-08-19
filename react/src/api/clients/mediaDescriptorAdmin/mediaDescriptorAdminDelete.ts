/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MediaDescriptorAdminDeleteOptions,
  MediaDescriptorAdminDeleteResponses,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/media/:id}
 */
export function mediaDescriptorAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<MediaDescriptorAdminDeleteOptions, ThrowOnError>,
): Promise<RequestResult<MediaDescriptorAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-admin/media/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<MediaDescriptorAdminDeleteResponses, ThrowOnError>>;
}
