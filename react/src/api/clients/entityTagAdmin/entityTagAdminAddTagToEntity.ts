/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { EntityTagAdminAddTagToEntityOptions, EntityTagAdminAddTagToEntityResponses } from '../../models/entityTagAdmin/EntityTagAdminAddTagToEntity'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-admin/entity-tags}
 */
export function entityTagAdminAddTagToEntity<ThrowOnError extends boolean = true>(options: Options<EntityTagAdminAddTagToEntityOptions, ThrowOnError>): Promise<RequestResult<EntityTagAdminAddTagToEntityResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/cms-kit-admin/entity-tags', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<EntityTagAdminAddTagToEntityResponses, ThrowOnError>>
}
