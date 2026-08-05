/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";
import type { VoloCmsKitPublicCommentsCmsUserDto } from "./CmsUserDto.ts";
import type { VoloCmsKitPublicCommentsCommentDto } from "./CommentDto.ts";

/**
 * @type object
 */
export type VoloCmsKitPublicCommentsCommentWithDetailsDto = {
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
  creatorId?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @type array | undefined
   */
  replies?: VoloCmsKitPublicCommentsCommentDto[] | null;
  /**
   * @type object | undefined
   */
  author?: VoloCmsKitPublicCommentsCmsUserDto;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
