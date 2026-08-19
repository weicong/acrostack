/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AuditLogGetStatisticsOptions, AuditLogGetStatisticsResponses } from '../../models/auditLog/AuditLogGetStatistics'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/audit-log/statistics}
 */
export function auditLogGetStatistics<ThrowOnError extends boolean = true>(options: Options<AuditLogGetStatisticsOptions, ThrowOnError> = {}): Promise<RequestResult<AuditLogGetStatisticsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/audit-log/statistics', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AuditLogGetStatisticsResponses, ThrowOnError>>
}
