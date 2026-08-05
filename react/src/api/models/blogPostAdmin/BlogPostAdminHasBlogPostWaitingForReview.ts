/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type boolean
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus200Plain = boolean;

/**
 * @type boolean
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus200Json = boolean;

/**
 * @type boolean
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus200Json2 = boolean;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus200 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus200Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus200Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus200Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus400 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus400Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus400Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus401 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus401Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus401Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus403 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus403Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus403Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus404 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus404Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus404Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus500 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus500Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus500Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminHasBlogPostWaitingForReviewStatus501 =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus501Plain
  | BlogPostAdminHasBlogPostWaitingForReviewStatus501Json
  | BlogPostAdminHasBlogPostWaitingForReviewStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review";
};

/**
 * @type object
 */
export type BlogPostAdminHasBlogPostWaitingForReviewResponses = {
  "200": BlogPostAdminHasBlogPostWaitingForReviewStatus200;
  "400": BlogPostAdminHasBlogPostWaitingForReviewStatus400;
  "401": BlogPostAdminHasBlogPostWaitingForReviewStatus401;
  "403": BlogPostAdminHasBlogPostWaitingForReviewStatus403;
  "404": BlogPostAdminHasBlogPostWaitingForReviewStatus404;
  "500": BlogPostAdminHasBlogPostWaitingForReviewStatus500;
  "501": BlogPostAdminHasBlogPostWaitingForReviewStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminHasBlogPostWaitingForReviewResponse =
  | BlogPostAdminHasBlogPostWaitingForReviewStatus200
  | BlogPostAdminHasBlogPostWaitingForReviewStatus400
  | BlogPostAdminHasBlogPostWaitingForReviewStatus401
  | BlogPostAdminHasBlogPostWaitingForReviewStatus403
  | BlogPostAdminHasBlogPostWaitingForReviewStatus404
  | BlogPostAdminHasBlogPostWaitingForReviewStatus500
  | BlogPostAdminHasBlogPostWaitingForReviewStatus501;
