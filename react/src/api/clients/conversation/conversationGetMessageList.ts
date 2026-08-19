/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ConversationGetMessageListOptions, ConversationGetMessageListResponses } from '../../models/conversation/ConversationGetMessageList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/conversation/message-list}
 */
export function conversationGetMessageList<ThrowOnError extends boolean = true>(options: Options<ConversationGetMessageListOptions, ThrowOnError> = {}): Promise<RequestResult<ConversationGetMessageListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/conversation/message-list', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<ConversationGetMessageListResponses, ThrowOnError>>
}
