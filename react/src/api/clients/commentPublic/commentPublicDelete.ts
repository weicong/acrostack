/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentPublicDeleteOptions, CommentPublicDeleteResponses } from '../../models/commentPublic/CommentPublicDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export function commentPublicDelete<ThrowOnError extends boolean = true>(options: Options<CommentPublicDeleteOptions, ThrowOnError>): Promise<RequestResult<CommentPublicDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/cms-kit-public/comments/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentPublicDeleteResponses, ThrowOnError>>
}
