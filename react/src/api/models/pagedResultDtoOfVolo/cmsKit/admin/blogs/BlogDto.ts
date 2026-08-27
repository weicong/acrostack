/* oxlint-disable */

import type { VoloCmsKitAdminBlogsBlogDto } from "../../../../volo/cmsKit/admin/blogs/BlogDto";

export type PagedResultDtoOfVoloCmsKitAdminBlogsBlogDto = {
  items?: VoloCmsKitAdminBlogsBlogDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
