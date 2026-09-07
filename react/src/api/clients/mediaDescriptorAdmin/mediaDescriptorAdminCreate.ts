/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  MediaDescriptorAdminCreateOptions,
  MediaDescriptorAdminCreateResponses,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/media/:entityType}
 */
export function mediaDescriptorAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<MediaDescriptorAdminCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<MediaDescriptorAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, contentType, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/media/{entityType}",
      security: [{ type: "oauth2" }],
      contentType: {
        request: "multipart/form-data",
        ...(typeof contentType === "string" ? { request: contentType } : contentType),
      },
      ...config,
    }) as Promise<RequestResult<MediaDescriptorAdminCreateResponses, ThrowOnError>>,
  );
}
