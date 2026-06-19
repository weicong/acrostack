/* oxlint-disable */

import type { VoloAbpMultiTenancyTenantUserSharingStrategy } from "../../../multiTenancy/TenantUserSharingStrategy.ts";

/**
 * @type object
 */
export type VoloAbpAspNetCoreMvcMultiTenancyMultiTenancyInfoDto = {
  /**
   * @type boolean | undefined
   */
  isEnabled?: boolean;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  userSharingStrategy?: VoloAbpMultiTenancyTenantUserSharingStrategy;
};
