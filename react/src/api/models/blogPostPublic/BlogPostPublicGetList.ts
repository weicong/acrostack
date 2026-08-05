/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/contents/blogPostCommonDtoVolo/cmsKit/common/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string
 */
export type BlogPostPublicGetListPathBlogSlug = string;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostPublicGetListQueryAuthorId = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostPublicGetListQueryTagId = string | undefined;

/**
 * @type boolean | undefined
 */
export type BlogPostPublicGetListQueryFilterOnFavorites = boolean | undefined;

/**
 * @type string | undefined
 */
export type BlogPostPublicGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostPublicGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostPublicGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitContentsBlogPostCommonDtoVoloCmsKitCommonApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type BlogPostPublicGetListStatus200 =
  | BlogPostPublicGetListStatus200Plain
  | BlogPostPublicGetListStatus200Json
  | BlogPostPublicGetListStatus200Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus400 =
  | BlogPostPublicGetListStatus400Plain
  | BlogPostPublicGetListStatus400Json
  | BlogPostPublicGetListStatus400Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus401 =
  | BlogPostPublicGetListStatus401Plain
  | BlogPostPublicGetListStatus401Json
  | BlogPostPublicGetListStatus401Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus403 =
  | BlogPostPublicGetListStatus403Plain
  | BlogPostPublicGetListStatus403Json
  | BlogPostPublicGetListStatus403Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus404 =
  | BlogPostPublicGetListStatus404Plain
  | BlogPostPublicGetListStatus404Json
  | BlogPostPublicGetListStatus404Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus500 =
  | BlogPostPublicGetListStatus500Plain
  | BlogPostPublicGetListStatus500Json
  | BlogPostPublicGetListStatus500Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetListStatus501 =
  | BlogPostPublicGetListStatus501Plain
  | BlogPostPublicGetListStatus501Json
  | BlogPostPublicGetListStatus501Json2;

/**
 * @type object
 */
export type BlogPostPublicGetListRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blogSlug: BlogPostPublicGetListPathBlogSlug;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    AuthorId?: BlogPostPublicGetListQueryAuthorId;
    TagId?: BlogPostPublicGetListQueryTagId;
    FilterOnFavorites?: BlogPostPublicGetListQueryFilterOnFavorites;
    Sorting?: BlogPostPublicGetListQuerySorting;
    SkipCount?: BlogPostPublicGetListQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/blog-posts/${string}`;
};

/**
 * @type object
 */
export type BlogPostPublicGetListResponses = {
  "200": BlogPostPublicGetListStatus200;
  "400": BlogPostPublicGetListStatus400;
  "401": BlogPostPublicGetListStatus401;
  "403": BlogPostPublicGetListStatus403;
  "404": BlogPostPublicGetListStatus404;
  "500": BlogPostPublicGetListStatus500;
  "501": BlogPostPublicGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostPublicGetListResponse =
  | BlogPostPublicGetListStatus200
  | BlogPostPublicGetListStatus400
  | BlogPostPublicGetListStatus401
  | BlogPostPublicGetListStatus403
  | BlogPostPublicGetListStatus404
  | BlogPostPublicGetListStatus500
  | BlogPostPublicGetListStatus501;
