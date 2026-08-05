/* oxlint-disable */

import type { VoloCmsKitAdminMenusPermissionLookupDto } from "../../admin/menus/PermissionLookupDto.ts";

/**
 * @type object
 */
export type VoloCmsKitPublicReactionsReactionWithSelectionDto = {
  /**
   * @type object | undefined
   */
  reaction?: VoloCmsKitAdminMenusPermissionLookupDto;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  count?: number;
  /**
   * @type boolean | undefined
   */
  isSelectedByCurrentUser?: boolean;
};
