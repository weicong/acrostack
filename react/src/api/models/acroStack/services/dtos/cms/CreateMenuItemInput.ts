/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsCreateMenuItemInput = {
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  menuId: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  displayName: string;
  /**
   * @minLength 0
   * @maxLength 512
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
   * @minLength 0
   * @maxLength 64
   * @type string | undefined
   */
  icon?: string | null;
  /**
   * @minLength 0
   * @maxLength 16
   * @type string | undefined
   */
  target?: string | null;
};
