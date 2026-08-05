/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/blogs/blogPostListDtoVolo/cmsKit/admin/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitBlogsBlogPostStatus } from "../volo/cmsKit/blogs/BlogPostStatus.ts";

/**
 * @type string | undefined
 */
export type BlogPostAdminGetListQueryFilter = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostAdminGetListQueryBlogId = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostAdminGetListQueryAuthorId = string | undefined;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostAdminGetListQueryTagId = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostAdminGetListQueryStatus = VoloCmsKitBlogsBlogPostStatus | undefined;

/**
 * @type string | undefined
 */
export type BlogPostAdminGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostAdminGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BlogPostAdminGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminBlogsBlogPostListDtoVoloCmsKitAdminApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type BlogPostAdminGetListStatus200 =
  | BlogPostAdminGetListStatus200Plain
  | BlogPostAdminGetListStatus200Json
  | BlogPostAdminGetListStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus400 =
  | BlogPostAdminGetListStatus400Plain
  | BlogPostAdminGetListStatus400Json
  | BlogPostAdminGetListStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus401 =
  | BlogPostAdminGetListStatus401Plain
  | BlogPostAdminGetListStatus401Json
  | BlogPostAdminGetListStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus403 =
  | BlogPostAdminGetListStatus403Plain
  | BlogPostAdminGetListStatus403Json
  | BlogPostAdminGetListStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus404 =
  | BlogPostAdminGetListStatus404Plain
  | BlogPostAdminGetListStatus404Json
  | BlogPostAdminGetListStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus500 =
  | BlogPostAdminGetListStatus500Plain
  | BlogPostAdminGetListStatus500Json
  | BlogPostAdminGetListStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetListStatus501 =
  | BlogPostAdminGetListStatus501Plain
  | BlogPostAdminGetListStatus501Json
  | BlogPostAdminGetListStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: BlogPostAdminGetListQueryFilter;
    BlogId?: BlogPostAdminGetListQueryBlogId;
    AuthorId?: BlogPostAdminGetListQueryAuthorId;
    TagId?: BlogPostAdminGetListQueryTagId;
    Status?: BlogPostAdminGetListQueryStatus;
    Sorting?: BlogPostAdminGetListQuerySorting;
    SkipCount?: BlogPostAdminGetListQuerySkipCount;
    MaxResultCount?: BlogPostAdminGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs/blog-posts";
};

/**
 * @type object
 */
export type BlogPostAdminGetListResponses = {
  "200": BlogPostAdminGetListStatus200;
  "400": BlogPostAdminGetListStatus400;
  "401": BlogPostAdminGetListStatus401;
  "403": BlogPostAdminGetListStatus403;
  "404": BlogPostAdminGetListStatus404;
  "500": BlogPostAdminGetListStatus500;
  "501": BlogPostAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminGetListResponse =
  | BlogPostAdminGetListStatus200
  | BlogPostAdminGetListStatus400
  | BlogPostAdminGetListStatus401
  | BlogPostAdminGetListStatus403
  | BlogPostAdminGetListStatus404
  | BlogPostAdminGetListStatus500
  | BlogPostAdminGetListStatus501;
