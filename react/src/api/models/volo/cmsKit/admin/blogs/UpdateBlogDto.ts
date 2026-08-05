/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminBlogsUpdateBlogDto = {
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
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
