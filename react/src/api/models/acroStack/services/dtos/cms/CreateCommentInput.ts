/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsCreateCommentInput = {
  /**
   * @minLength 0
   * @maxLength 64
   * @type string
   */
  entityType: string;
  /**
   * @description
   * Format: `uuid`
   * @type string
   */
  entityId: string;
  /**
   * @minLength 0
   * @maxLength 1024
   * @type string
   */
  text: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string | null;
};
