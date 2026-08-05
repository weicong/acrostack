/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/cmsKit/admin/menus/permissionLookupDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type MenuItemAdminGetPermissionLookupQueryFilter = string | undefined;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloCmsKitAdminMenusPermissionLookupDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPermissionLookupStatus200 =
  | MenuItemAdminGetPermissionLookupStatus200Plain
  | MenuItemAdminGetPermissionLookupStatus200Json
  | MenuItemAdminGetPermissionLookupStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus400 =
  | MenuItemAdminGetPermissionLookupStatus400Plain
  | MenuItemAdminGetPermissionLookupStatus400Json
  | MenuItemAdminGetPermissionLookupStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus401 =
  | MenuItemAdminGetPermissionLookupStatus401Plain
  | MenuItemAdminGetPermissionLookupStatus401Json
  | MenuItemAdminGetPermissionLookupStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus403 =
  | MenuItemAdminGetPermissionLookupStatus403Plain
  | MenuItemAdminGetPermissionLookupStatus403Json
  | MenuItemAdminGetPermissionLookupStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus404 =
  | MenuItemAdminGetPermissionLookupStatus404Plain
  | MenuItemAdminGetPermissionLookupStatus404Json
  | MenuItemAdminGetPermissionLookupStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus500 =
  | MenuItemAdminGetPermissionLookupStatus500Plain
  | MenuItemAdminGetPermissionLookupStatus500Json
  | MenuItemAdminGetPermissionLookupStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPermissionLookupStatus501 =
  | MenuItemAdminGetPermissionLookupStatus501Plain
  | MenuItemAdminGetPermissionLookupStatus501Json
  | MenuItemAdminGetPermissionLookupStatus501Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: MenuItemAdminGetPermissionLookupQueryFilter;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/menu-items/lookup/permissions";
};

/**
 * @type object
 */
export type MenuItemAdminGetPermissionLookupResponses = {
  "200": MenuItemAdminGetPermissionLookupStatus200;
  "400": MenuItemAdminGetPermissionLookupStatus400;
  "401": MenuItemAdminGetPermissionLookupStatus401;
  "403": MenuItemAdminGetPermissionLookupStatus403;
  "404": MenuItemAdminGetPermissionLookupStatus404;
  "500": MenuItemAdminGetPermissionLookupStatus500;
  "501": MenuItemAdminGetPermissionLookupStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetPermissionLookupResponse =
  | MenuItemAdminGetPermissionLookupStatus200
  | MenuItemAdminGetPermissionLookupStatus400
  | MenuItemAdminGetPermissionLookupStatus401
  | MenuItemAdminGetPermissionLookupStatus403
  | MenuItemAdminGetPermissionLookupStatus404
  | MenuItemAdminGetPermissionLookupStatus500
  | MenuItemAdminGetPermissionLookupStatus501;
