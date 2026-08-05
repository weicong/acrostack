/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitBlogsBlogPostStatus } from "../../blogs/BlogPostStatus.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminBlogsBlogPostDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
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
  shortDescription?: string | null;
  /**
   * @type string | undefined
   */
  content?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  coverImageMediaId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  status?: VoloCmsKitBlogsBlogPostStatus;
};
