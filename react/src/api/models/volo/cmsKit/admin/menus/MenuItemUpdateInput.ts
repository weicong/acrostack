/* oxlint-disable */

export type VoloCmsKitAdminMenusMenuItemUpdateInput = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
  /**
   * @minLength 1
   * @type string
   */
  displayName: string;
  isActive?: boolean;
  url?: string | null;
  icon?: string | null;
  target?: string | null;
  elementId?: string | null;
  cssClass?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  pageId?: string | null;
  requiredPermissionName?: string | null;
  concurrencyStamp?: string | null;
};
