/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto.ts";
import type { VoloCmsKitAdminBlogsUpdateBlogPostDto } from "../volo/cmsKit/admin/blogs/UpdateBlogPostDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostAdminUpdatePathId = string;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminUpdateStatus200 =
  | BlogPostAdminUpdateStatus200Plain
  | BlogPostAdminUpdateStatus200Json
  | BlogPostAdminUpdateStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus400 =
  | BlogPostAdminUpdateStatus400Plain
  | BlogPostAdminUpdateStatus400Json
  | BlogPostAdminUpdateStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus401 =
  | BlogPostAdminUpdateStatus401Plain
  | BlogPostAdminUpdateStatus401Json
  | BlogPostAdminUpdateStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus403 =
  | BlogPostAdminUpdateStatus403Plain
  | BlogPostAdminUpdateStatus403Json
  | BlogPostAdminUpdateStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus404 =
  | BlogPostAdminUpdateStatus404Plain
  | BlogPostAdminUpdateStatus404Json
  | BlogPostAdminUpdateStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus500 =
  | BlogPostAdminUpdateStatus500Plain
  | BlogPostAdminUpdateStatus500Json
  | BlogPostAdminUpdateStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminUpdateStatus501 =
  | BlogPostAdminUpdateStatus501Plain
  | BlogPostAdminUpdateStatus501Json
  | BlogPostAdminUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogPostAdminUpdateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminUpdateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminUpdateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminUpdateData =
  | BlogPostAdminUpdateJsonData
  | BlogPostAdminUpdateJson2Data
  | BlogPostAdminUpdateJson3Data;

/**
 * @type object
 */
export type BlogPostAdminUpdateRequestConfig = {
  data?: BlogPostAdminUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostAdminUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/blog-posts/${string}`;
};

/**
 * @type object
 */
export type BlogPostAdminUpdateResponses = {
  "200": BlogPostAdminUpdateStatus200;
  "400": BlogPostAdminUpdateStatus400;
  "401": BlogPostAdminUpdateStatus401;
  "403": BlogPostAdminUpdateStatus403;
  "404": BlogPostAdminUpdateStatus404;
  "500": BlogPostAdminUpdateStatus500;
  "501": BlogPostAdminUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminUpdateResponse =
  | BlogPostAdminUpdateStatus200
  | BlogPostAdminUpdateStatus400
  | BlogPostAdminUpdateStatus401
  | BlogPostAdminUpdateStatus403
  | BlogPostAdminUpdateStatus404
  | BlogPostAdminUpdateStatus500
  | BlogPostAdminUpdateStatus501;
