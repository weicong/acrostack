/* oxlint-disable */

/**
 * @type object
 */
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
  /**
   * @type string | undefined
   */
  propertyName?: string | null;
  /**
   * @type string | undefined
   */
  originalValue?: string | null;
  /**
   * @type string | undefined
   */
  newValue?: string | null;
  /**
   * @type string | undefined
   */
  propertyTypeFullName?: string | null;
};
