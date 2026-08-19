/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  MediaDescriptorAdminCreateOptions,
  MediaDescriptorAdminCreateResponses,
} from "../../models/mediaDescriptorAdmin/MediaDescriptorAdminCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/media/:entityType}
 */
export function mediaDescriptorAdminCreate<ThrowOnError extends boolean = true>(
  options: Options<MediaDescriptorAdminCreateOptions, ThrowOnError>,
): Promise<RequestResult<MediaDescriptorAdminCreateResponses, ThrowOnError>> {
  const { client: request = client, contentType, ...config } = options;

  return request({
    method: "POST",
    url: "/api/cms-kit-admin/media/{entityType}",
    security: [{ type: "oauth2" }],
    contentType: {
      request: "multipart/form-data",
      ...(typeof contentType === "string" ? { request: contentType } : contentType),
    },
    ...config,
  }) as Promise<RequestResult<MediaDescriptorAdminCreateResponses, ThrowOnError>>;
}
