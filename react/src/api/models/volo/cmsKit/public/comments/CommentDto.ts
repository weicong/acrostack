/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitPublicCommentsCmsUserDto } from "./CmsUserDto.ts";

/**
 * @type object
 */
export type VoloCmsKitPublicCommentsCommentDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @type string | undefined
   */
  entityType?: string | null;
  /**
   * @type string | undefined
   */
  entityId?: string | null;
  /**
   * @type string | undefined
   */
  text?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  repliedCommentId?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @type object | undefined
   */
  author?: VoloCmsKitPublicCommentsCmsUserDto;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
  /**
   * @type string | undefined
   */
  url?: string | null;
};
