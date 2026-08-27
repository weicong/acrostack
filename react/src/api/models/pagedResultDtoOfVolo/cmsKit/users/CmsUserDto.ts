/* oxlint-disable */

import type { VoloCmsKitUsersCmsUserDto } from "../../../volo/cmsKit/users/CmsUserDto";

export type PagedResultDtoOfVoloCmsKitUsersCmsUserDto = {
  items?: VoloCmsKitUsersCmsUserDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
