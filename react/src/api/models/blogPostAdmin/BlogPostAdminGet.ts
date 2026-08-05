/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostAdminGetPathId = string;

/**
 * @type object
 */
export type BlogPostAdminGetStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminGetStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminGetStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminGetStatus200 =
  | BlogPostAdminGetStatus200Plain
  | BlogPostAdminGetStatus200Json
  | BlogPostAdminGetStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus400 =
  | BlogPostAdminGetStatus400Plain
  | BlogPostAdminGetStatus400Json
  | BlogPostAdminGetStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus401 =
  | BlogPostAdminGetStatus401Plain
  | BlogPostAdminGetStatus401Json
  | BlogPostAdminGetStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus403 =
  | BlogPostAdminGetStatus403Plain
  | BlogPostAdminGetStatus403Json
  | BlogPostAdminGetStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus404 =
  | BlogPostAdminGetStatus404Plain
  | BlogPostAdminGetStatus404Json
  | BlogPostAdminGetStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus500 =
  | BlogPostAdminGetStatus500Plain
  | BlogPostAdminGetStatus500Json
  | BlogPostAdminGetStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminGetStatus501 =
  | BlogPostAdminGetStatus501Plain
  | BlogPostAdminGetStatus501Json
  | BlogPostAdminGetStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostAdminGetPathId;
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
export type BlogPostAdminGetResponses = {
  "200": BlogPostAdminGetStatus200;
  "400": BlogPostAdminGetStatus400;
  "401": BlogPostAdminGetStatus401;
  "403": BlogPostAdminGetStatus403;
  "404": BlogPostAdminGetStatus404;
  "500": BlogPostAdminGetStatus500;
  "501": BlogPostAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminGetResponse =
  | BlogPostAdminGetStatus200
  | BlogPostAdminGetStatus400
  | BlogPostAdminGetStatus401
  | BlogPostAdminGetStatus403
  | BlogPostAdminGetStatus404
  | BlogPostAdminGetStatus500
  | BlogPostAdminGetStatus501;
