/* oxlint-disable */

import type { VoloCmsKitPublicCommentsCmsUserDto } from "./CmsUserDto";
import type { VoloCmsKitPublicCommentsCommentDto } from "./CommentDto";

export type VoloCmsKitPublicCommentsCommentWithDetailsDto = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  entityType?: string | null;
  entityId?: string | null;
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
  replies?: VoloCmsKitPublicCommentsCommentDto[] | null;
  author?: VoloCmsKitPublicCommentsCmsUserDto;
  concurrencyStamp?: string | null;
};
