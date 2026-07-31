/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsCreatePageInput = {
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 128
   * @type string
   */
  slug: string;
  /**
   * @minLength 1
   * @type string
   */
  content: string;
  /**
   * @minLength 0
   * @maxLength 512
   * @type string | undefined
   */
  description?: string | null;
};
