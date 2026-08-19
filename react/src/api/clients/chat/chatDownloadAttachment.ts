/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ChatDownloadAttachmentOptions,
  ChatDownloadAttachmentResponses,
} from "../../models/chat/ChatDownloadAttachment";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/chat/messages/:messageId/attachment}
 */
export function chatDownloadAttachment<ThrowOnError extends boolean = true>(
  options: Options<ChatDownloadAttachmentOptions, ThrowOnError>,
): Promise<RequestResult<ChatDownloadAttachmentResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/chat/messages/{messageId}/attachment",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ChatDownloadAttachmentResponses, ThrowOnError>>;
}
