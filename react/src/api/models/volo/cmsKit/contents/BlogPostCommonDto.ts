/* oxlint-disable */

import type { VoloCmsKitUsersCmsUserDto } from "../users/CmsUserDto";

export type VoloCmsKitContentsBlogPostCommonDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
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
  title?: string | null;
  slug?: string | null;
  shortDescription?: string | null;
  content?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  coverImageMediaId?: string | null;
  author?: VoloCmsKitUsersCmsUserDto;
};
