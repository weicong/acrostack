/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/tags/tagDtoVolo/cmsKit/common/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type TagAdminGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type TagAdminGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TagAdminGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TagAdminGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type TagAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TagAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TagAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitTagsTagDtoVoloCmsKitCommonApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type TagAdminGetListStatus200 =
  | TagAdminGetListStatus200Plain
  | TagAdminGetListStatus200Json
  | TagAdminGetListStatus200Json2;

/**
 * @type object
 */
export type TagAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus400 =
  | TagAdminGetListStatus400Plain
  | TagAdminGetListStatus400Json
  | TagAdminGetListStatus400Json2;

/**
 * @type object
 */
export type TagAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus401 =
  | TagAdminGetListStatus401Plain
  | TagAdminGetListStatus401Json
  | TagAdminGetListStatus401Json2;

/**
 * @type object
 */
export type TagAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus403 =
  | TagAdminGetListStatus403Plain
  | TagAdminGetListStatus403Json
  | TagAdminGetListStatus403Json2;

/**
 * @type object
 */
export type TagAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus404 =
  | TagAdminGetListStatus404Plain
  | TagAdminGetListStatus404Json
  | TagAdminGetListStatus404Json2;

/**
 * @type object
 */
export type TagAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus500 =
  | TagAdminGetListStatus500Plain
  | TagAdminGetListStatus500Json
  | TagAdminGetListStatus500Json2;

/**
 * @type object
 */
export type TagAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminGetListStatus501 =
  | TagAdminGetListStatus501Plain
  | TagAdminGetListStatus501Json
  | TagAdminGetListStatus501Json2;

/**
 * @type object
 */
export type TagAdminGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: TagAdminGetListQueryFilter;
    Sorting?: TagAdminGetListQuerySorting;
    SkipCount?: TagAdminGetListQuerySkipCount;
    MaxResultCount?: TagAdminGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/tags";
};

/**
 * @type object
 */
export type TagAdminGetListResponses = {
  "200": TagAdminGetListStatus200;
  "400": TagAdminGetListStatus400;
  "401": TagAdminGetListStatus401;
  "403": TagAdminGetListStatus403;
  "404": TagAdminGetListStatus404;
  "500": TagAdminGetListStatus500;
  "501": TagAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagAdminGetListResponse =
  | TagAdminGetListStatus200
  | TagAdminGetListStatus400
  | TagAdminGetListStatus401
  | TagAdminGetListStatus403
  | TagAdminGetListStatus404
  | TagAdminGetListStatus500
  | TagAdminGetListStatus501;
