/* oxlint-disable */

import type { VoloCmsKitAdminPagesPageDto } from "../../../../volo/cmsKit/admin/pages/PageDto";

export type PagedResultDtoOfVoloCmsKitAdminPagesPageDto = {
  items?: VoloCmsKitAdminPagesPageDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
