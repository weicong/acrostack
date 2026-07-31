/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/cms/BlogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type BlogGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type BlogGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BlogGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type BlogGetListStatus200 =
  | BlogGetListStatus200Plain
  | BlogGetListStatus200Json
  | BlogGetListStatus200Json2;

/**
 * @type object
 */
export type BlogGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetListStatus400 =
  | BlogGetListStatus400Plain
  | BlogGetListStatus400Json
  | BlogGetListStatus400Json2;

/**
 * @type object
 */
export type BlogGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetListStatus401 =
  | BlogGetListStatus401Plain
  | BlogGetListStatus401Json
  | BlogGetListStatus401Json2;

/**
 * @type object
 */
export type BlogGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetListStatus403 =
  | BlogGetListStatus403Plain
  | BlogGetListStatus403Json
  | BlogGetListStatus403Json2;

/**
 * @type object
 */
export type BlogGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetListStatus404 =
  | BlogGetListStatus404Plain
  | BlogGetListStatus404Json
  | BlogGetListStatus404Json2;

/**
 * @type object
 */
export type BlogGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetListStatus500 =
  | BlogGetListStatus500Plain
  | BlogGetListStatus500Json
  | BlogGetListStatus500Json2;

/**
 * @type object
 */
export type BlogGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetListStatus501 =
  | BlogGetListStatus501Plain
  | BlogGetListStatus501Json
  | BlogGetListStatus501Json2;

/**
 * @type object
 */
export type BlogGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: BlogGetListQueryFilter;
    Sorting?: BlogGetListQuerySorting;
    SkipCount?: BlogGetListQuerySkipCount;
    MaxResultCount?: BlogGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/blog";
};

/**
 * @type object
 */
export type BlogGetListResponses = {
  "200": BlogGetListStatus200;
  "400": BlogGetListStatus400;
  "401": BlogGetListStatus401;
  "403": BlogGetListStatus403;
  "404": BlogGetListStatus404;
  "500": BlogGetListStatus500;
  "501": BlogGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogGetListResponse =
  | BlogGetListStatus200
  | BlogGetListStatus400
  | BlogGetListStatus401
  | BlogGetListStatus403
  | BlogGetListStatus404
  | BlogGetListStatus500
  | BlogGetListStatus501;
