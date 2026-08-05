/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosFileManagementFileShareDto = {
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
  fileEntryId?: string;
  /**
   * @type string | undefined
   */
  token?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  expirationTime?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  maxDownloadCount?: number | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  downloadCount?: number;
  /**
   * @type boolean | undefined
   */
  isRevoked?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
