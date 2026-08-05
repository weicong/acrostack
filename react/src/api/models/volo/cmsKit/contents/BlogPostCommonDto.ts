/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitUsersCmsUserDto } from "../users/CmsUserDto.ts";

/**
 * @type object
 */
export type VoloCmsKitContentsBlogPostCommonDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
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
   * @type object | undefined
   */
  author?: VoloCmsKitUsersCmsUserDto;
};
