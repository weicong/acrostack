/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AuditLogGetListOptions, AuditLogGetListResponses } from '../../models/auditLog/AuditLogGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/audit-log}
 */
export function auditLogGetList<ThrowOnError extends boolean = true>(options: Options<AuditLogGetListOptions, ThrowOnError> = {}): Promise<RequestResult<AuditLogGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/audit-log', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AuditLogGetListResponses, ThrowOnError>>
}
