/* oxlint-disable */

import type { VoloCmsKitContentsBlogPostCommonDto } from "../../../volo/cmsKit/contents/BlogPostCommonDto";

export type PagedResultDtoOfVoloCmsKitContentsBlogPostCommonDto = {
  items?: VoloCmsKitContentsBlogPostCommonDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
