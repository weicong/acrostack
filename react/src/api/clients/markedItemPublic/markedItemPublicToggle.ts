/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { MarkedItemPublicToggleOptions, MarkedItemPublicToggleResponses } from '../../models/markedItemPublic/MarkedItemPublicToggle'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/marked-items/:entityType/:entityId}
 */
export function markedItemPublicToggle<ThrowOnError extends boolean = true>(options: Options<MarkedItemPublicToggleOptions, ThrowOnError>): Promise<RequestResult<MarkedItemPublicToggleResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-public/marked-items/{entityType}/{entityId}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<MarkedItemPublicToggleResponses, ThrowOnError>>
}
