/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogPostDto } from "../volo/cmsKit/admin/blogs/BlogPostDto.ts";
import type { VoloCmsKitAdminBlogsCreateBlogPostDto } from "../volo/cmsKit/admin/blogs/CreateBlogPostDto.ts";

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus200Plain = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus200Json = VoloCmsKitAdminBlogsBlogPostDto;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus200Json2 = VoloCmsKitAdminBlogsBlogPostDto;

export type BlogPostAdminCreateAndSendToReviewStatus200 =
  | BlogPostAdminCreateAndSendToReviewStatus200Plain
  | BlogPostAdminCreateAndSendToReviewStatus200Json
  | BlogPostAdminCreateAndSendToReviewStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus400 =
  | BlogPostAdminCreateAndSendToReviewStatus400Plain
  | BlogPostAdminCreateAndSendToReviewStatus400Json
  | BlogPostAdminCreateAndSendToReviewStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus401 =
  | BlogPostAdminCreateAndSendToReviewStatus401Plain
  | BlogPostAdminCreateAndSendToReviewStatus401Json
  | BlogPostAdminCreateAndSendToReviewStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus403 =
  | BlogPostAdminCreateAndSendToReviewStatus403Plain
  | BlogPostAdminCreateAndSendToReviewStatus403Json
  | BlogPostAdminCreateAndSendToReviewStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus404 =
  | BlogPostAdminCreateAndSendToReviewStatus404Plain
  | BlogPostAdminCreateAndSendToReviewStatus404Json
  | BlogPostAdminCreateAndSendToReviewStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus500 =
  | BlogPostAdminCreateAndSendToReviewStatus500Plain
  | BlogPostAdminCreateAndSendToReviewStatus500Json
  | BlogPostAdminCreateAndSendToReviewStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminCreateAndSendToReviewStatus501 =
  | BlogPostAdminCreateAndSendToReviewStatus501Plain
  | BlogPostAdminCreateAndSendToReviewStatus501Json
  | BlogPostAdminCreateAndSendToReviewStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateAndSendToReviewJsonData =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateAndSendToReviewJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogPostAdminCreateAndSendToReviewJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogPostDto>, "extraProperties">
  | undefined;

export type BlogPostAdminCreateAndSendToReviewData =
  | BlogPostAdminCreateAndSendToReviewJsonData
  | BlogPostAdminCreateAndSendToReviewJson2Data
  | BlogPostAdminCreateAndSendToReviewJson3Data;

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewRequestConfig = {
  data?: BlogPostAdminCreateAndSendToReviewData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review";
};

/**
 * @type object
 */
export type BlogPostAdminCreateAndSendToReviewResponses = {
  "200": BlogPostAdminCreateAndSendToReviewStatus200;
  "400": BlogPostAdminCreateAndSendToReviewStatus400;
  "401": BlogPostAdminCreateAndSendToReviewStatus401;
  "403": BlogPostAdminCreateAndSendToReviewStatus403;
  "404": BlogPostAdminCreateAndSendToReviewStatus404;
  "500": BlogPostAdminCreateAndSendToReviewStatus500;
  "501": BlogPostAdminCreateAndSendToReviewStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminCreateAndSendToReviewResponse =
  | BlogPostAdminCreateAndSendToReviewStatus200
  | BlogPostAdminCreateAndSendToReviewStatus400
  | BlogPostAdminCreateAndSendToReviewStatus401
  | BlogPostAdminCreateAndSendToReviewStatus403
  | BlogPostAdminCreateAndSendToReviewStatus404
  | BlogPostAdminCreateAndSendToReviewStatus500
  | BlogPostAdminCreateAndSendToReviewStatus501;
