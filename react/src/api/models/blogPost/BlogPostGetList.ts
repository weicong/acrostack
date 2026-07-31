/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogPostDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/cms/BlogPostDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type BlogPostGetListQueryFilter = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostGetListQueryBlogId = string | undefined;

/**
 * @type string | undefined
 */
export type BlogPostGetListQueryTag = string | undefined;

/**
 * @type string | undefined
 */
export type BlogPostGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BlogPostGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogPostDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogPostGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogPostDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogPostGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsBlogPostDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type BlogPostGetListStatus200 =
  | BlogPostGetListStatus200Plain
  | BlogPostGetListStatus200Json
  | BlogPostGetListStatus200Json2;

/**
 * @type object
 */
export type BlogPostGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetListStatus400 =
  | BlogPostGetListStatus400Plain
  | BlogPostGetListStatus400Json
  | BlogPostGetListStatus400Json2;

/**
 * @type object
 */
export type BlogPostGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetListStatus401 =
  | BlogPostGetListStatus401Plain
  | BlogPostGetListStatus401Json
  | BlogPostGetListStatus401Json2;

/**
 * @type object
 */
export type BlogPostGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetListStatus403 =
  | BlogPostGetListStatus403Plain
  | BlogPostGetListStatus403Json
  | BlogPostGetListStatus403Json2;

/**
 * @type object
 */
export type BlogPostGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetListStatus404 =
  | BlogPostGetListStatus404Plain
  | BlogPostGetListStatus404Json
  | BlogPostGetListStatus404Json2;

/**
 * @type object
 */
export type BlogPostGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetListStatus500 =
  | BlogPostGetListStatus500Plain
  | BlogPostGetListStatus500Json
  | BlogPostGetListStatus500Json2;

/**
 * @type object
 */
export type BlogPostGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetListStatus501 =
  | BlogPostGetListStatus501Plain
  | BlogPostGetListStatus501Json
  | BlogPostGetListStatus501Json2;

/**
 * @type object
 */
export type BlogPostGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: BlogPostGetListQueryFilter;
    BlogId?: BlogPostGetListQueryBlogId;
    Tag?: BlogPostGetListQueryTag;
    Sorting?: BlogPostGetListQuerySorting;
    SkipCount?: BlogPostGetListQuerySkipCount;
    MaxResultCount?: BlogPostGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/blog-post";
};

/**
 * @type object
 */
export type BlogPostGetListResponses = {
  "200": BlogPostGetListStatus200;
  "400": BlogPostGetListStatus400;
  "401": BlogPostGetListStatus401;
  "403": BlogPostGetListStatus403;
  "404": BlogPostGetListStatus404;
  "500": BlogPostGetListStatus500;
  "501": BlogPostGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostGetListResponse =
  | BlogPostGetListStatus200
  | BlogPostGetListStatus400
  | BlogPostGetListStatus401
  | BlogPostGetListStatus403
  | BlogPostGetListStatus404
  | BlogPostGetListStatus500
  | BlogPostGetListStatus501;
