/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackFileManagementFileVersionDto = {
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
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  versionNumber?: number;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  byteSize?: bigint;
  /**
   * @type string | undefined
   */
  contentType?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  uploaderUserId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
