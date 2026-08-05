/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminMenusMenuItemCreateInput } from "../volo/cmsKit/admin/menus/MenuItemCreateInput.ts";
import type { VoloCmsKitMenusMenuItemDto } from "../volo/cmsKit/menus/MenuItemDto.ts";

/**
 * @type object
 */
export type MenuItemAdminCreateStatus200Plain = VoloCmsKitMenusMenuItemDto;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus200Json = VoloCmsKitMenusMenuItemDto;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus200Json2 = VoloCmsKitMenusMenuItemDto;

export type MenuItemAdminCreateStatus200 =
  | MenuItemAdminCreateStatus200Plain
  | MenuItemAdminCreateStatus200Json
  | MenuItemAdminCreateStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus400 =
  | MenuItemAdminCreateStatus400Plain
  | MenuItemAdminCreateStatus400Json
  | MenuItemAdminCreateStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus401 =
  | MenuItemAdminCreateStatus401Plain
  | MenuItemAdminCreateStatus401Json
  | MenuItemAdminCreateStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus403 =
  | MenuItemAdminCreateStatus403Plain
  | MenuItemAdminCreateStatus403Json
  | MenuItemAdminCreateStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus404 =
  | MenuItemAdminCreateStatus404Plain
  | MenuItemAdminCreateStatus404Json
  | MenuItemAdminCreateStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus500 =
  | MenuItemAdminCreateStatus500Plain
  | MenuItemAdminCreateStatus500Json
  | MenuItemAdminCreateStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminCreateStatus501 =
  | MenuItemAdminCreateStatus501Plain
  | MenuItemAdminCreateStatus501Json
  | MenuItemAdminCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type MenuItemAdminCreateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminMenusMenuItemCreateInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type MenuItemAdminCreateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminMenusMenuItemCreateInput>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type MenuItemAdminCreateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminMenusMenuItemCreateInput>, "extraProperties">
  | undefined;

export type MenuItemAdminCreateData =
  | MenuItemAdminCreateJsonData
  | MenuItemAdminCreateJson2Data
  | MenuItemAdminCreateJson3Data;

/**
 * @type object
 */
export type MenuItemAdminCreateRequestConfig = {
  data?: MenuItemAdminCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/menu-items";
};

/**
 * @type object
 */
export type MenuItemAdminCreateResponses = {
  "200": MenuItemAdminCreateStatus200;
  "400": MenuItemAdminCreateStatus400;
  "401": MenuItemAdminCreateStatus401;
  "403": MenuItemAdminCreateStatus403;
  "404": MenuItemAdminCreateStatus404;
  "500": MenuItemAdminCreateStatus500;
  "501": MenuItemAdminCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminCreateResponse =
  | MenuItemAdminCreateStatus200
  | MenuItemAdminCreateStatus400
  | MenuItemAdminCreateStatus401
  | MenuItemAdminCreateStatus403
  | MenuItemAdminCreateStatus404
  | MenuItemAdminCreateStatus500
  | MenuItemAdminCreateStatus501;
