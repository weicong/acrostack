/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminMenusMenuItemMoveInput } from "../volo/cmsKit/admin/menus/MenuItemMoveInput.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuItemAdminMoveMenuItemPathId = string;

/**
 * @type any
 */
export type MenuItemAdminMoveMenuItemStatus200 = any;

/**
 * @type any
 */
export type MenuItemAdminMoveMenuItemStatus204 = any;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus400 =
  | MenuItemAdminMoveMenuItemStatus400Plain
  | MenuItemAdminMoveMenuItemStatus400Json
  | MenuItemAdminMoveMenuItemStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus401 =
  | MenuItemAdminMoveMenuItemStatus401Plain
  | MenuItemAdminMoveMenuItemStatus401Json
  | MenuItemAdminMoveMenuItemStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus403 =
  | MenuItemAdminMoveMenuItemStatus403Plain
  | MenuItemAdminMoveMenuItemStatus403Json
  | MenuItemAdminMoveMenuItemStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus404 =
  | MenuItemAdminMoveMenuItemStatus404Plain
  | MenuItemAdminMoveMenuItemStatus404Json
  | MenuItemAdminMoveMenuItemStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus500 =
  | MenuItemAdminMoveMenuItemStatus500Plain
  | MenuItemAdminMoveMenuItemStatus500Json
  | MenuItemAdminMoveMenuItemStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminMoveMenuItemStatus501 =
  | MenuItemAdminMoveMenuItemStatus501Plain
  | MenuItemAdminMoveMenuItemStatus501Json
  | MenuItemAdminMoveMenuItemStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuItemAdminMoveMenuItemJsonData = VoloCmsKitAdminMenusMenuItemMoveInput | undefined;

/**
 * @type object | undefined
 */
export type MenuItemAdminMoveMenuItemJson2Data = VoloCmsKitAdminMenusMenuItemMoveInput | undefined;

/**
 * @type object | undefined
 */
export type MenuItemAdminMoveMenuItemJson3Data = VoloCmsKitAdminMenusMenuItemMoveInput | undefined;

export type MenuItemAdminMoveMenuItemData =
  | MenuItemAdminMoveMenuItemJsonData
  | MenuItemAdminMoveMenuItemJson2Data
  | MenuItemAdminMoveMenuItemJson3Data;

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemRequestConfig = {
  data?: MenuItemAdminMoveMenuItemData;
  /**
   * @type object
   */
  pathParams: {
    id: MenuItemAdminMoveMenuItemPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/menu-items/${string}/move`;
};

/**
 * @type object
 */
export type MenuItemAdminMoveMenuItemResponses = {
  "200": MenuItemAdminMoveMenuItemStatus200;
  "204": MenuItemAdminMoveMenuItemStatus204;
  "400": MenuItemAdminMoveMenuItemStatus400;
  "401": MenuItemAdminMoveMenuItemStatus401;
  "403": MenuItemAdminMoveMenuItemStatus403;
  "404": MenuItemAdminMoveMenuItemStatus404;
  "500": MenuItemAdminMoveMenuItemStatus500;
  "501": MenuItemAdminMoveMenuItemStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminMoveMenuItemResponse =
  | MenuItemAdminMoveMenuItemStatus200
  | MenuItemAdminMoveMenuItemStatus204
  | MenuItemAdminMoveMenuItemStatus400
  | MenuItemAdminMoveMenuItemStatus401
  | MenuItemAdminMoveMenuItemStatus403
  | MenuItemAdminMoveMenuItemStatus404
  | MenuItemAdminMoveMenuItemStatus500
  | MenuItemAdminMoveMenuItemStatus501;
