/* oxlint-disable */

import type { VoloAbpMultiTenancyTenantUserSharingStrategy } from "../../../multiTenancy/TenantUserSharingStrategy";

export type VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto = {
  isEnabled?: boolean;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  userSharingStrategy?: VoloAbpMultiTenancyTenantUserSharingStrategy;
};
