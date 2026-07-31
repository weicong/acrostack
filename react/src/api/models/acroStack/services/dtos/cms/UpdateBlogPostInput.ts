/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsUpdateBlogPostInput = {
  /**
   * @minLength 0
   * @maxLength 256
   * @type string
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 256
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
  excerpt?: string | null;
  /**
   * @minLength 0
   * @maxLength 512
   * @type string | undefined
   */
  coverImage?: string | null;
  /**
   * @type array | undefined
   */
  tags?: string[] | null;
};
