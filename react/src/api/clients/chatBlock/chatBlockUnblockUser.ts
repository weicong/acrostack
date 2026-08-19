/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ChatBlockUnblockUserOptions, ChatBlockUnblockUserResponses } from '../../models/chatBlock/ChatBlockUnblockUser'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/chat-block/unblock-user/:blockedUserId}
 */
export function chatBlockUnblockUser<ThrowOnError extends boolean = true>(options: Options<ChatBlockUnblockUserOptions, ThrowOnError>): Promise<RequestResult<ChatBlockUnblockUserResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/app/chat-block/unblock-user/{blockedUserId}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<ChatBlockUnblockUserResponses, ThrowOnError>>
}
