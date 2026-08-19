/* oxlint-disable */

export type VoloCmsKitAdminBlogsUpdateBlogPostDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 1
   * @maxLength 64
   * @type string
   */
  title: string;
  /**
   * @minLength 2
   * @maxLength 256
   * @type string
   */
  slug: string;
  /**
   * @maxLength 256
   * @type string | undefined
   */
  shortDescription?: string | null;
  /**
   * @maxLength 2147483647
   * @type string | undefined
   */
  content?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  coverImageMediaId?: string | null;
  concurrencyStamp?: string | null;
};
