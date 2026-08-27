/* oxlint-disable */

import type { VoloCmsKitTagsTagDto } from "../../../volo/cmsKit/tags/TagDto";

export type PagedResultDtoOfVoloCmsKitTagsTagDto = {
  items?: VoloCmsKitTagsTagDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
