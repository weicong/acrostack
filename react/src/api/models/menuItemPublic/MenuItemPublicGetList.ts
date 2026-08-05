/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitMenusMenuItemDto } from "../volo/cmsKit/menus/MenuItemDto.ts";

/**
 * @type array
 */
export type MenuItemPublicGetListStatus200Plain = VoloCmsKitMenusMenuItemDto[];

/**
 * @type array
 */
export type MenuItemPublicGetListStatus200Json = VoloCmsKitMenusMenuItemDto[];

/**
 * @type array
 */
export type MenuItemPublicGetListStatus200Json2 = VoloCmsKitMenusMenuItemDto[];

export type MenuItemPublicGetListStatus200 =
  | MenuItemPublicGetListStatus200Plain
  | MenuItemPublicGetListStatus200Json
  | MenuItemPublicGetListStatus200Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus400 =
  | MenuItemPublicGetListStatus400Plain
  | MenuItemPublicGetListStatus400Json
  | MenuItemPublicGetListStatus400Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus401 =
  | MenuItemPublicGetListStatus401Plain
  | MenuItemPublicGetListStatus401Json
  | MenuItemPublicGetListStatus401Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus403 =
  | MenuItemPublicGetListStatus403Plain
  | MenuItemPublicGetListStatus403Json
  | MenuItemPublicGetListStatus403Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus404 =
  | MenuItemPublicGetListStatus404Plain
  | MenuItemPublicGetListStatus404Json
  | MenuItemPublicGetListStatus404Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus500 =
  | MenuItemPublicGetListStatus500Plain
  | MenuItemPublicGetListStatus500Json
  | MenuItemPublicGetListStatus500Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemPublicGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemPublicGetListStatus501 =
  | MenuItemPublicGetListStatus501Plain
  | MenuItemPublicGetListStatus501Json
  | MenuItemPublicGetListStatus501Json2;

/**
 * @type object
 */
export type MenuItemPublicGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-public/menu-items";
};

/**
 * @type object
 */
export type MenuItemPublicGetListResponses = {
  "200": MenuItemPublicGetListStatus200;
  "400": MenuItemPublicGetListStatus400;
  "401": MenuItemPublicGetListStatus401;
  "403": MenuItemPublicGetListStatus403;
  "404": MenuItemPublicGetListStatus404;
  "500": MenuItemPublicGetListStatus500;
  "501": MenuItemPublicGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemPublicGetListResponse =
  | MenuItemPublicGetListStatus200
  | MenuItemPublicGetListStatus400
  | MenuItemPublicGetListStatus401
  | MenuItemPublicGetListStatus403
  | MenuItemPublicGetListStatus404
  | MenuItemPublicGetListStatus500
  | MenuItemPublicGetListStatus501;
