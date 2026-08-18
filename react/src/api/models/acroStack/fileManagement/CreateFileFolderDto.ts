/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackFileManagementCreateFileFolderDto = {
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  name: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string | null;
};
