/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsTagDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  lastModifierId?: string | null;
  /**
   * @type boolean | undefined
   */
  isDeleted?: boolean;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  deleterId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  deletionTime?: string | null;
  /**
   * @type string | undefined
   */
  name?: string | null;
};
