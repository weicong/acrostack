/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ContactGetListOptions, ContactGetListResponses } from '../../models/contact/ContactGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/contact}
 */
export function contactGetList<ThrowOnError extends boolean = true>(options: Options<ContactGetListOptions, ThrowOnError> = {}): Promise<RequestResult<ContactGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/contact', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<ContactGetListResponses, ThrowOnError>>
}
