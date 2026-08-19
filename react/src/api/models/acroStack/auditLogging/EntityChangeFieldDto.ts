/* oxlint-disable */

export type AcroStackAuditLoggingEntityChangeFieldDto = {
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
  entityChangeId?: string;
  propertyName?: string | null;
  originalValue?: string | null;
  newValue?: string | null;
  propertyTypeFullName?: string | null;
};
