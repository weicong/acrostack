/* oxlint-disable */

import type { AcroStackAuditLoggingEntityChangeFieldDto } from './EntityChangeFieldDto'

export type AcroStackAuditLoggingEntityChangeDto = {
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
    auditLogId?: string;
    entityTypeFullName?: string | null;
    entityId?: string | null;
    /**
     * @description
     * Format: `int32`
     * @type integer | undefined
    */
    changeType?: number;
    /**
     * @description
     * Format: `date-time`
     * @type string | undefined
    */
    changeTime?: string;
    /**
     * @description
     * Format: `uuid`
     * @type string | undefined
    */
    tenantId?: string | null;
    propertyChanges?: AcroStackAuditLoggingEntityChangeFieldDto[] | null;
};
