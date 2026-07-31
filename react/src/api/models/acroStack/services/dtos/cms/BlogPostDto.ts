/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsBlogPostDto = {
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
  blogId?: string;
  /**
   * @type string | undefined
   */
  title?: string | null;
  /**
   * @type string | undefined
   */
  slug?: string | null;
  /**
   * @type string | undefined
   */
  content?: string | null;
  /**
   * @type string | undefined
   */
  excerpt?: string | null;
  /**
   * @type string | undefined
   */
  coverImage?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  readingTime?: number;
  /**
   * @type array | undefined
   */
  tags?: string[] | null;
};
