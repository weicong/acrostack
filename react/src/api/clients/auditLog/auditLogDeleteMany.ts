/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AuditLogDeleteManyOptions, AuditLogDeleteManyResponses } from '../../models/auditLog/AuditLogDeleteMany'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/audit-log/many}
 */
export function auditLogDeleteMany<ThrowOnError extends boolean = true>(options: Options<AuditLogDeleteManyOptions, ThrowOnError> = {}): Promise<RequestResult<AuditLogDeleteManyResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/app/audit-log/many', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AuditLogDeleteManyResponses, ThrowOnError>>
}
