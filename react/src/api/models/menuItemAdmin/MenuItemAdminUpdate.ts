/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminMenusMenuItemUpdateInput } from "../volo/cmsKit/admin/menus/MenuItemUpdateInput.ts";
import type { VoloCmsKitMenusMenuItemDto } from "../volo/cmsKit/menus/MenuItemDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuItemAdminUpdatePathId = string;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus200Plain = VoloCmsKitMenusMenuItemDto;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus200Json = VoloCmsKitMenusMenuItemDto;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus200Json2 = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminUpdateStatus200 =
  | MenuItemAdminUpdateStatus200Plain
  | MenuItemAdminUpdateStatus200Json
  | MenuItemAdminUpdateStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus400 =
  | MenuItemAdminUpdateStatus400Plain
  | MenuItemAdminUpdateStatus400Json
  | MenuItemAdminUpdateStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus401 =
  | MenuItemAdminUpdateStatus401Plain
  | MenuItemAdminUpdateStatus401Json
  | MenuItemAdminUpdateStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus403 =
  | MenuItemAdminUpdateStatus403Plain
  | MenuItemAdminUpdateStatus403Json
  | MenuItemAdminUpdateStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus404 =
  | MenuItemAdminUpdateStatus404Plain
  | MenuItemAdminUpdateStatus404Json
  | MenuItemAdminUpdateStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus500 =
  | MenuItemAdminUpdateStatus500Plain
  | MenuItemAdminUpdateStatus500Json
  | MenuItemAdminUpdateStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminUpdateStatus501 =
  | MenuItemAdminUpdateStatus501Plain
  | MenuItemAdminUpdateStatus501Json
  | MenuItemAdminUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuItemAdminUpdateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminMenusMenuItemUpdateInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type MenuItemAdminUpdateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminMenusMenuItemUpdateInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type MenuItemAdminUpdateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminMenusMenuItemUpdateInput>, "extraProperties">
  | undefined;

export type MenuItemAdminUpdateData =
  | MenuItemAdminUpdateJsonData
  | MenuItemAdminUpdateJson2Data
  | MenuItemAdminUpdateJson3Data;

/**
 * @type object
 */
export type MenuItemAdminUpdateRequestConfig = {
  data?: MenuItemAdminUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: MenuItemAdminUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/menu-items/${string}`;
};

/**
 * @type object
 */
export type MenuItemAdminUpdateResponses = {
  "200": MenuItemAdminUpdateStatus200;
  "400": MenuItemAdminUpdateStatus400;
  "401": MenuItemAdminUpdateStatus401;
  "403": MenuItemAdminUpdateStatus403;
  "404": MenuItemAdminUpdateStatus404;
  "500": MenuItemAdminUpdateStatus500;
  "501": MenuItemAdminUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminUpdateResponse =
  | MenuItemAdminUpdateStatus200
  | MenuItemAdminUpdateStatus400
  | MenuItemAdminUpdateStatus401
  | MenuItemAdminUpdateStatus403
  | MenuItemAdminUpdateStatus404
  | MenuItemAdminUpdateStatus500
  | MenuItemAdminUpdateStatus501;
