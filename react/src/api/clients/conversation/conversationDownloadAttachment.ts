/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ConversationDownloadAttachmentOptions,
  ConversationDownloadAttachmentResponses,
} from "../../models/conversation/ConversationDownloadAttachment";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/download-attachment/:messageId}
 */
export function conversationDownloadAttachment<ThrowOnError extends boolean = true>(
  options: Options<ConversationDownloadAttachmentOptions, ThrowOnError>,
): Promise<RequestResult<ConversationDownloadAttachmentResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/conversation/download-attachment/{messageId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ConversationDownloadAttachmentResponses, ThrowOnError>>;
}
