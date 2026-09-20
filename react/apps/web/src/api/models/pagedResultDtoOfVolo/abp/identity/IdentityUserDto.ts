/* oxlint-disable */

import type { VoloAbpIdentityIdentityUserDto } from "../../../volo/abp/identity/IdentityUserDto";

export type PagedResultDtoOfVoloAbpIdentityIdentityUserDto = {
  items?: VoloAbpIdentityIdentityUserDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
