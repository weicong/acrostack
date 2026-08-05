/* oxlint-disable */

import type { VoloCmsKitAdminMenusPermissionLookupDto } from "../../cmsKit/admin/menus/PermissionLookupDto.ts";

/**
 * @type object
 */
export type VoloAbpPermissionManagementResourcePermissionGrantInfoDto = {
  /**
   * @type string | undefined
   */
  providerName?: string | null;
  /**
   * @type string | undefined
   */
  providerKey?: string | null;
  /**
   * @type string | undefined
   */
  providerDisplayName?: string | null;
  /**
   * @type string | undefined
   */
  providerNameDisplayName?: string | null;
  /**
   * @type array | undefined
   */
  permissions?: VoloCmsKitAdminMenusPermissionLookupDto[] | null;
};
