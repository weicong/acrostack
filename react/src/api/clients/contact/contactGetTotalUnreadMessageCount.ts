/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ContactGetTotalUnreadMessageCountOptions, ContactGetTotalUnreadMessageCountResponses } from '../../models/contact/ContactGetTotalUnreadMessageCount'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/contact/total-unread-message-count}
 */
export function contactGetTotalUnreadMessageCount<ThrowOnError extends boolean = true>(options: Options<ContactGetTotalUnreadMessageCountOptions, ThrowOnError> = {}): Promise<RequestResult<ContactGetTotalUnreadMessageCountResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/contact/total-unread-message-count', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<ContactGetTotalUnreadMessageCountResponses, ThrowOnError>>
}
