/* oxlint-disable */

export type VoloCmsKitAdminMenusMenuItemCreateInput = {
  readonly extraProperties?: {
    [key: string]: unknown;
  } | null;
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
  isActive?: boolean;
  url?: string | null;
  icon?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  order?: number;
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
};
