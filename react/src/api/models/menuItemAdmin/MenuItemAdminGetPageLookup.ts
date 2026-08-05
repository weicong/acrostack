/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/menus/pageLookupDtoVolo/cmsKit/admin/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPagesPageStatus } from "../volo/cmsKit/pages/PageStatus.ts";

/**
 * @type string | undefined
 */
export type MenuItemAdminGetPageLookupQueryFilter = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type MenuItemAdminGetPageLookupQueryStatus = VoloCmsKitPagesPageStatus | undefined;

/**
 * @type string | undefined
 */
export type MenuItemAdminGetPageLookupQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type MenuItemAdminGetPageLookupQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type MenuItemAdminGetPageLookupQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminMenusPageLookupDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type MenuItemAdminGetPageLookupStatus200 =
  | MenuItemAdminGetPageLookupStatus200Plain
  | MenuItemAdminGetPageLookupStatus200Json
  | MenuItemAdminGetPageLookupStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus400 =
  | MenuItemAdminGetPageLookupStatus400Plain
  | MenuItemAdminGetPageLookupStatus400Json
  | MenuItemAdminGetPageLookupStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus401 =
  | MenuItemAdminGetPageLookupStatus401Plain
  | MenuItemAdminGetPageLookupStatus401Json
  | MenuItemAdminGetPageLookupStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus403 =
  | MenuItemAdminGetPageLookupStatus403Plain
  | MenuItemAdminGetPageLookupStatus403Json
  | MenuItemAdminGetPageLookupStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus404 =
  | MenuItemAdminGetPageLookupStatus404Plain
  | MenuItemAdminGetPageLookupStatus404Json
  | MenuItemAdminGetPageLookupStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus500 =
  | MenuItemAdminGetPageLookupStatus500Plain
  | MenuItemAdminGetPageLookupStatus500Json
  | MenuItemAdminGetPageLookupStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetPageLookupStatus501 =
  | MenuItemAdminGetPageLookupStatus501Plain
  | MenuItemAdminGetPageLookupStatus501Json
  | MenuItemAdminGetPageLookupStatus501Json2;

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: MenuItemAdminGetPageLookupQueryFilter;
    Status?: MenuItemAdminGetPageLookupQueryStatus;
    Sorting?: MenuItemAdminGetPageLookupQuerySorting;
    SkipCount?: MenuItemAdminGetPageLookupQuerySkipCount;
    MaxResultCount?: MenuItemAdminGetPageLookupQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/menu-items/lookup/pages";
};

/**
 * @type object
 */
export type MenuItemAdminGetPageLookupResponses = {
  "200": MenuItemAdminGetPageLookupStatus200;
  "400": MenuItemAdminGetPageLookupStatus400;
  "401": MenuItemAdminGetPageLookupStatus401;
  "403": MenuItemAdminGetPageLookupStatus403;
  "404": MenuItemAdminGetPageLookupStatus404;
  "500": MenuItemAdminGetPageLookupStatus500;
  "501": MenuItemAdminGetPageLookupStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetPageLookupResponse =
  | MenuItemAdminGetPageLookupStatus200
  | MenuItemAdminGetPageLookupStatus400
  | MenuItemAdminGetPageLookupStatus401
  | MenuItemAdminGetPageLookupStatus403
  | MenuItemAdminGetPageLookupStatus404
  | MenuItemAdminGetPageLookupStatus500
  | MenuItemAdminGetPageLookupStatus501;
