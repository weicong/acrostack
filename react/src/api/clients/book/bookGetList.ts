/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { BookGetListOptions, BookGetListResponses } from '../../models/book/BookGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/book}
 */
export function bookGetList<ThrowOnError extends boolean = true>(options: Options<BookGetListOptions, ThrowOnError> = {}): Promise<RequestResult<BookGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/book', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<BookGetListResponses, ThrowOnError>>
}
