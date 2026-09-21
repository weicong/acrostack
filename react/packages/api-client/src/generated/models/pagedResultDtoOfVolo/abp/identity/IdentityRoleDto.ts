/* oxlint-disable */

import type { VoloAbpIdentityIdentityRoleDto } from "../../../volo/abp/identity/IdentityRoleDto";

export type PagedResultDtoOfVoloAbpIdentityIdentityRoleDto = {
  items?: VoloAbpIdentityIdentityRoleDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
