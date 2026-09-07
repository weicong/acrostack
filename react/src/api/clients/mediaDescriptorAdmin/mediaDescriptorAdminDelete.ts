/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MediaDescriptorAdminDeleteOptions,
  MediaDescriptorAdminDeleteResponses,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/media/:id}
 */
export function mediaDescriptorAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<MediaDescriptorAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<MediaDescriptorAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/media/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<MediaDescriptorAdminDeleteResponses, ThrowOnError>>,
  );
}
