/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { CommentPublicUpdateOptions, CommentPublicUpdateResponses } from '../../models/commentPublic/CommentPublicUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/comments/:id}
 */
export function commentPublicUpdate<ThrowOnError extends boolean = true>(options: Options<CommentPublicUpdateOptions, ThrowOnError>): Promise<RequestResult<CommentPublicUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-public/comments/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<CommentPublicUpdateResponses, ThrowOnError>>
}
