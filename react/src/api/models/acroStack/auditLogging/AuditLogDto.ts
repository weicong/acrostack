/* oxlint-disable */

import type { AcroStackAuditLoggingAuditLogActionDto } from "./AuditLogActionDto.ts";
import type { AcroStackAuditLoggingEntityChangeDto } from "./EntityChangeDto.ts";

/**
 * @type object
 */
export type AcroStackAuditLoggingAuditLogDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  userId?: string | null;
  /**
   * @type string | undefined
   */
  userName?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  /**
   * @type string | undefined
   */
  tenantName?: string | null;
  /**
   * @type string | undefined
   */
  httpMethod?: string | null;
  /**
   * @type string | undefined
   */
  url?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  httpStatusCode?: number | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  executionTime?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  executionDuration?: number;
  /**
   * @type string | undefined
   */
  clientIpAddress?: string | null;
  /**
   * @type string | undefined
   */
  clientName?: string | null;
  /**
   * @type string | undefined
   */
  browserInfo?: string | null;
  /**
   * @type string | undefined
   */
  exceptions?: string | null;
  /**
   * @type string | undefined
   */
  comments?: string | null;
  /**
   * @type string | undefined
   */
  correlationId?: string | null;
  /**
   * @type array | undefined
   */
  entityChanges?: AcroStackAuditLoggingEntityChangeDto[] | null;
  /**
   * @type array | undefined
   */
  actions?: AcroStackAuditLoggingAuditLogActionDto[] | null;
};
