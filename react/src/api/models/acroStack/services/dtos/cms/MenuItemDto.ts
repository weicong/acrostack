/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsMenuItemDto = {
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
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  menuId?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
  /**
   * @type string | undefined
   */
  url?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
  /**
   * @type string | undefined
   */
  icon?: string | null;
  /**
   * @type string | undefined
   */
  target?: string | null;
};
