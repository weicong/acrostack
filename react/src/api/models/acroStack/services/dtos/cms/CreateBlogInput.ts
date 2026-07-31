/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsCreateBlogInput = {
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 128
   * @type string
   */
  slug: string;
  /**
   * @minLength 0
   * @maxLength 512
   * @type string | undefined
   */
  description?: string | null;
};
