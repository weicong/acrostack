/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto.ts";
import type { VoloCmsKitAdminBlogsCreateBlogPostDto } from "../volo/cmsKit/admin/blogs/CreateBlogPostDto.ts";

/**
 * @type object
 */
export type BlogPostAdminCreateStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateStatus200 =
  | BlogPostAdminCreateStatus200Plain
  | BlogPostAdminCreateStatus200Json
  | BlogPostAdminCreateStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus400 =
  | BlogPostAdminCreateStatus400Plain
  | BlogPostAdminCreateStatus400Json
  | BlogPostAdminCreateStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus401 =
  | BlogPostAdminCreateStatus401Plain
  | BlogPostAdminCreateStatus401Json
  | BlogPostAdminCreateStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus403 =
  | BlogPostAdminCreateStatus403Plain
  | BlogPostAdminCreateStatus403Json
  | BlogPostAdminCreateStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus404 =
  | BlogPostAdminCreateStatus404Plain
  | BlogPostAdminCreateStatus404Json
  | BlogPostAdminCreateStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus500 =
  | BlogPostAdminCreateStatus500Plain
  | BlogPostAdminCreateStatus500Json
  | BlogPostAdminCreateStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateStatus501 =
  | BlogPostAdminCreateStatus501Plain
  | BlogPostAdminCreateStatus501Json
  | BlogPostAdminCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminCreateData =
  | BlogPostAdminCreateJsonData
  | BlogPostAdminCreateJson2Data
  | BlogPostAdminCreateJson3Data;

/**
 * @type object
 */
export type BlogPostAdminCreateRequestConfig = {
  data?: BlogPostAdminCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs/blog-posts";
};

/**
 * @type object
 */
export type BlogPostAdminCreateResponses = {
  "200": BlogPostAdminCreateStatus200;
  "400": BlogPostAdminCreateStatus400;
  "401": BlogPostAdminCreateStatus401;
  "403": BlogPostAdminCreateStatus403;
  "404": BlogPostAdminCreateStatus404;
  "500": BlogPostAdminCreateStatus500;
  "501": BlogPostAdminCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminCreateResponse =
  | BlogPostAdminCreateStatus200
  | BlogPostAdminCreateStatus400
  | BlogPostAdminCreateStatus401
  | BlogPostAdminCreateStatus403
  | BlogPostAdminCreateStatus404
  | BlogPostAdminCreateStatus500
  | BlogPostAdminCreateStatus501;
