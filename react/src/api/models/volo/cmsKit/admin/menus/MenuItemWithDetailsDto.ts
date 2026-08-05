/* oxlint-disable */

import type { VoloAbpAccountProfileDtoExtraProperties } from "../../../../VoloAbpAccountProfileDtoExtraProperties.ts";

/**
 * @type object
 */
export type VoloCmsKitAdminMenusMenuItemWithDetailsDto = {
  readonly extraProperties?: VoloAbpAccountProfileDtoExtraProperties;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  creatorId?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastModificationTime?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  lastModifierId?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  parentId?: string | null;
  /**
   * @type string | undefined
   */
  displayName?: string | null;
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
  /**
   * @type string | undefined
   */
  concurrencyStamp?: string | null;
  /**
   * @type string | undefined
   */
  pageTitle?: string | null;
};
