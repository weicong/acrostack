/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/menus/menuItemDtoVolo/cmsKit/common/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type MenuItemAdminGetListStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitMenusMenuItemDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetListStatus200 =
  | MenuItemAdminGetListStatus200Plain
  | MenuItemAdminGetListStatus200Json
  | MenuItemAdminGetListStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus400 =
  | MenuItemAdminGetListStatus400Plain
  | MenuItemAdminGetListStatus400Json
  | MenuItemAdminGetListStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus401 =
  | MenuItemAdminGetListStatus401Plain
  | MenuItemAdminGetListStatus401Json
  | MenuItemAdminGetListStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus403 =
  | MenuItemAdminGetListStatus403Plain
  | MenuItemAdminGetListStatus403Json
  | MenuItemAdminGetListStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus404 =
  | MenuItemAdminGetListStatus404Plain
  | MenuItemAdminGetListStatus404Json
  | MenuItemAdminGetListStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus500 =
  | MenuItemAdminGetListStatus500Plain
  | MenuItemAdminGetListStatus500Json
  | MenuItemAdminGetListStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetListStatus501 =
  | MenuItemAdminGetListStatus501Plain
  | MenuItemAdminGetListStatus501Json
  | MenuItemAdminGetListStatus501Json2;

/**
 * @type object
 */
export type MenuItemAdminGetListRequestConfig = {
  data?: never;
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
export type MenuItemAdminGetListResponses = {
  "200": MenuItemAdminGetListStatus200;
  "400": MenuItemAdminGetListStatus400;
  "401": MenuItemAdminGetListStatus401;
  "403": MenuItemAdminGetListStatus403;
  "404": MenuItemAdminGetListStatus404;
  "500": MenuItemAdminGetListStatus500;
  "501": MenuItemAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetListResponse =
  | MenuItemAdminGetListStatus200
  | MenuItemAdminGetListStatus400
  | MenuItemAdminGetListStatus401
  | MenuItemAdminGetListStatus403
  | MenuItemAdminGetListStatus404
  | MenuItemAdminGetListStatus500
  | MenuItemAdminGetListStatus501;
