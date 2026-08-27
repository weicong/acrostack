/* oxlint-disable */

import type { VoloCmsKitAdminBlogsBlogPostListDto } from "../../../../volo/cmsKit/admin/blogs/BlogPostListDto";

export type PagedResultDtoOfVoloCmsKitAdminBlogsBlogPostListDto = {
  items?: VoloCmsKitAdminBlogsBlogPostListDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
