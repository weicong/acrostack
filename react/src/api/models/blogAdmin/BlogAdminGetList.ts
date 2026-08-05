/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/blogs/blogDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type BlogAdminGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type BlogAdminGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogAdminGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogAdminGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BlogAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogAdminGetListStatus200 =
  | BlogAdminGetListStatus200Plain
  | BlogAdminGetListStatus200Json
  | BlogAdminGetListStatus200Json2;

/**
 * @type object
 */
export type BlogAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus400 =
  | BlogAdminGetListStatus400Plain
  | BlogAdminGetListStatus400Json
  | BlogAdminGetListStatus400Json2;

/**
 * @type object
 */
export type BlogAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus401 =
  | BlogAdminGetListStatus401Plain
  | BlogAdminGetListStatus401Json
  | BlogAdminGetListStatus401Json2;

/**
 * @type object
 */
export type BlogAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus403 =
  | BlogAdminGetListStatus403Plain
  | BlogAdminGetListStatus403Json
  | BlogAdminGetListStatus403Json2;

/**
 * @type object
 */
export type BlogAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus404 =
  | BlogAdminGetListStatus404Plain
  | BlogAdminGetListStatus404Json
  | BlogAdminGetListStatus404Json2;

/**
 * @type object
 */
export type BlogAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus500 =
  | BlogAdminGetListStatus500Plain
  | BlogAdminGetListStatus500Json
  | BlogAdminGetListStatus500Json2;

/**
 * @type object
 */
export type BlogAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetListStatus501 =
  | BlogAdminGetListStatus501Plain
  | BlogAdminGetListStatus501Json
  | BlogAdminGetListStatus501Json2;

/**
 * @type object
 */
export type BlogAdminGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: BlogAdminGetListQueryFilter;
    Sorting?: BlogAdminGetListQuerySorting;
    SkipCount?: BlogAdminGetListQuerySkipCount;
    MaxResultCount?: BlogAdminGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs";
};

/**
 * @type object
 */
export type BlogAdminGetListResponses = {
  "200": BlogAdminGetListStatus200;
  "400": BlogAdminGetListStatus400;
  "401": BlogAdminGetListStatus401;
  "403": BlogAdminGetListStatus403;
  "404": BlogAdminGetListStatus404;
  "500": BlogAdminGetListStatus500;
  "501": BlogAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminGetListResponse =
  | BlogAdminGetListStatus200
  | BlogAdminGetListStatus400
  | BlogAdminGetListStatus401
  | BlogAdminGetListStatus403
  | BlogAdminGetListStatus404
  | BlogAdminGetListStatus500
  | BlogAdminGetListStatus501;
