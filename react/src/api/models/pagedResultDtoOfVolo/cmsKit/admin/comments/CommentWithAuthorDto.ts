/* oxlint-disable */

import type { VoloCmsKitAdminCommentsCommentWithAuthorDto } from "../../../../volo/cmsKit/admin/comments/CommentWithAuthorDto";

export type PagedResultDtoOfVoloCmsKitAdminCommentsCommentWithAuthorDto = {
  items?: VoloCmsKitAdminCommentsCommentWithAuthorDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
