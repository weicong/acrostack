/* oxlint-disable */

import type { VoloCmsKitAdminMenusPageLookupDto } from "../../../../volo/cmsKit/admin/menus/PageLookupDto";

export type PagedResultDtoOfVoloCmsKitAdminMenusPageLookupDto = {
  items?: VoloCmsKitAdminMenusPageLookupDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
