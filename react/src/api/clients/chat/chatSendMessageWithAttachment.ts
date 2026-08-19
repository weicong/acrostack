/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ChatSendMessageWithAttachmentOptions, ChatSendMessageWithAttachmentResponses } from '../../models/chat/ChatSendMessageWithAttachment'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/chat/messages/send-with-attachment}
 */
export function chatSendMessageWithAttachment<ThrowOnError extends boolean = true>(options: Options<ChatSendMessageWithAttachmentOptions, ThrowOnError>): Promise<RequestResult<ChatSendMessageWithAttachmentResponses, ThrowOnError>> {
  const { client: request = client, contentType, ...config } = options

  return request({ method: 'POST', url: '/api/app/chat/messages/send-with-attachment', security: [{ type: 'oauth2' }], contentType: { request: 'multipart/form-data', ...(typeof contentType === 'string' ? { request: contentType } : contentType) }, ...config }) as Promise<RequestResult<ChatSendMessageWithAttachmentResponses, ThrowOnError>>
}
