/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminMenusMenuItemWithDetailsDto } from "../volo/cmsKit/admin/menus/MenuItemWithDetailsDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuItemAdminGetPathId = string;

/**
 * @type object
 */
export type MenuItemAdminGetStatus200Plain = VoloCmsKitAdminMenusMenuItemWithDetailsDto;

/**
 * @type object
 */
export type MenuItemAdminGetStatus200Json = VoloCmsKitAdminMenusMenuItemWithDetailsDto;

/**
 * @type object
 */
export type MenuItemAdminGetStatus200Json2 = VoloCmsKitAdminMenusMenuItemWithDetailsDto;

export type MenuItemAdminGetStatus200 =
  | MenuItemAdminGetStatus200Plain
  | MenuItemAdminGetStatus200Json
  | MenuItemAdminGetStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus400 =
  | MenuItemAdminGetStatus400Plain
  | MenuItemAdminGetStatus400Json
  | MenuItemAdminGetStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus401 =
  | MenuItemAdminGetStatus401Plain
  | MenuItemAdminGetStatus401Json
  | MenuItemAdminGetStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus403 =
  | MenuItemAdminGetStatus403Plain
  | MenuItemAdminGetStatus403Json
  | MenuItemAdminGetStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus404 =
  | MenuItemAdminGetStatus404Plain
  | MenuItemAdminGetStatus404Json
  | MenuItemAdminGetStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus500 =
  | MenuItemAdminGetStatus500Plain
  | MenuItemAdminGetStatus500Json
  | MenuItemAdminGetStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetStatus501 =
  | MenuItemAdminGetStatus501Plain
  | MenuItemAdminGetStatus501Json
  | MenuItemAdminGetStatus501Json2;

/**
 * @type object
 */
export type MenuItemAdminGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MenuItemAdminGetPathId;
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
export type MenuItemAdminGetResponses = {
  "200": MenuItemAdminGetStatus200;
  "400": MenuItemAdminGetStatus400;
  "401": MenuItemAdminGetStatus401;
  "403": MenuItemAdminGetStatus403;
  "404": MenuItemAdminGetStatus404;
  "500": MenuItemAdminGetStatus500;
  "501": MenuItemAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetResponse =
  | MenuItemAdminGetStatus200
  | MenuItemAdminGetStatus400
  | MenuItemAdminGetStatus401
  | MenuItemAdminGetStatus403
  | MenuItemAdminGetStatus404
  | MenuItemAdminGetStatus500
  | MenuItemAdminGetStatus501;
