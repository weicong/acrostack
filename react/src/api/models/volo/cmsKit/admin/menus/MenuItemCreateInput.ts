/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminMenusMenuItemCreateInput = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string | null;
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
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
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
};
