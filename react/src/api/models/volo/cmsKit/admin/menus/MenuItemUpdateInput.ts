/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminMenusMenuItemUpdateInput = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @minLength 1
   * @type string
   */
  displayName: string;
  /**
   * @type boolean | undefined
   */
  isActive?: boolean;
  /**
   * @type string | undefined
   */
  url?: string | null;
  /**
   * @type string | undefined
   */
  icon?: string | null;
  /**
   * @type string | undefined
   */
  target?: string | null;
  /**
   * @type string | undefined
   */
  elementId?: string | null;
  /**
   * @type string | undefined
   */
  cssClass?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  pageId?: string | null;
  /**
   * @type string | undefined
   */
  requiredPermissionName?: string | null;
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
};
