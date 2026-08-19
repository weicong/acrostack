/* oxlint-disable */

import type { VoloCmsKitAdminCommentsCmsUserDto } from "./CmsUserDto";

export type VoloCmsKitAdminCommentsCommentWithAuthorDto = {
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
  author?: VoloCmsKitAdminCommentsCmsUserDto;
  url?: string | null;
  isApproved?: boolean | null;
};
