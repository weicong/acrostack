/* oxlint-disable */

import type { VoloCmsKitPublicCommentsCmsUserDto } from "./CmsUserDto";

export type VoloCmsKitPublicCommentsCommentDto = {
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
  author?: VoloCmsKitPublicCommentsCmsUserDto;
  concurrencyStamp?: string | null;
  url?: string | null;
};
