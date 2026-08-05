/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto.ts";
import type { VoloCmsKitAdminBlogsCreateBlogPostDto } from "../volo/cmsKit/admin/blogs/CreateBlogPostDto.ts";

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndPublishStatus200 =
  | BlogPostAdminCreateAndPublishStatus200Plain
  | BlogPostAdminCreateAndPublishStatus200Json
  | BlogPostAdminCreateAndPublishStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus400 =
  | BlogPostAdminCreateAndPublishStatus400Plain
  | BlogPostAdminCreateAndPublishStatus400Json
  | BlogPostAdminCreateAndPublishStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus401 =
  | BlogPostAdminCreateAndPublishStatus401Plain
  | BlogPostAdminCreateAndPublishStatus401Json
  | BlogPostAdminCreateAndPublishStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus403 =
  | BlogPostAdminCreateAndPublishStatus403Plain
  | BlogPostAdminCreateAndPublishStatus403Json
  | BlogPostAdminCreateAndPublishStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus404 =
  | BlogPostAdminCreateAndPublishStatus404Plain
  | BlogPostAdminCreateAndPublishStatus404Json
  | BlogPostAdminCreateAndPublishStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus500 =
  | BlogPostAdminCreateAndPublishStatus500Plain
  | BlogPostAdminCreateAndPublishStatus500Json
  | BlogPostAdminCreateAndPublishStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndPublishStatus501 =
  | BlogPostAdminCreateAndPublishStatus501Plain
  | BlogPostAdminCreateAndPublishStatus501Json
  | BlogPostAdminCreateAndPublishStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateAndPublishJsonData =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateAndPublishJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateAndPublishJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminCreateAndPublishData =
  | BlogPostAdminCreateAndPublishJsonData
  | BlogPostAdminCreateAndPublishJson2Data
  | BlogPostAdminCreateAndPublishJson3Data;

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishRequestConfig = {
  data?: BlogPostAdminCreateAndPublishData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs/blog-posts/create-and-publish";
};

/**
 * @type object
 */
export type BlogPostAdminCreateAndPublishResponses = {
  "200": BlogPostAdminCreateAndPublishStatus200;
  "400": BlogPostAdminCreateAndPublishStatus400;
  "401": BlogPostAdminCreateAndPublishStatus401;
  "403": BlogPostAdminCreateAndPublishStatus403;
  "404": BlogPostAdminCreateAndPublishStatus404;
  "500": BlogPostAdminCreateAndPublishStatus500;
  "501": BlogPostAdminCreateAndPublishStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminCreateAndPublishResponse =
  | BlogPostAdminCreateAndPublishStatus200
  | BlogPostAdminCreateAndPublishStatus400
  | BlogPostAdminCreateAndPublishStatus401
  | BlogPostAdminCreateAndPublishStatus403
  | BlogPostAdminCreateAndPublishStatus404
  | BlogPostAdminCreateAndPublishStatus500
  | BlogPostAdminCreateAndPublishStatus501;
