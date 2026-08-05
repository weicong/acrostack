/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminBlogsCreateBlogDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 1
   * @maxLength 64
   * @type string
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 64
   * @type string
   */
  slug: string;
};
