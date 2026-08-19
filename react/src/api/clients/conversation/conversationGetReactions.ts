/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ConversationGetReactionsOptions, ConversationGetReactionsResponses } from '../../models/conversation/ConversationGetReactions'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/conversation/reactions/:messageId}
 */
export function conversationGetReactions<ThrowOnError extends boolean = true>(options: Options<ConversationGetReactionsOptions, ThrowOnError>): Promise<RequestResult<ConversationGetReactionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/conversation/reactions/{messageId}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<ConversationGetReactionsResponses, ThrowOnError>>
}
