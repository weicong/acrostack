/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostAdminSendToReviewPathId = string;

/**
 * @type any
 */
export type BlogPostAdminSendToReviewStatus200 = any;

/**
 * @type any
 */
export type BlogPostAdminSendToReviewStatus204 = any;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus400 =
  | BlogPostAdminSendToReviewStatus400Plain
  | BlogPostAdminSendToReviewStatus400Json
  | BlogPostAdminSendToReviewStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus401 =
  | BlogPostAdminSendToReviewStatus401Plain
  | BlogPostAdminSendToReviewStatus401Json
  | BlogPostAdminSendToReviewStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus403 =
  | BlogPostAdminSendToReviewStatus403Plain
  | BlogPostAdminSendToReviewStatus403Json
  | BlogPostAdminSendToReviewStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus404 =
  | BlogPostAdminSendToReviewStatus404Plain
  | BlogPostAdminSendToReviewStatus404Json
  | BlogPostAdminSendToReviewStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus500 =
  | BlogPostAdminSendToReviewStatus500Plain
  | BlogPostAdminSendToReviewStatus500Json
  | BlogPostAdminSendToReviewStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminSendToReviewStatus501 =
  | BlogPostAdminSendToReviewStatus501Plain
  | BlogPostAdminSendToReviewStatus501Json
  | BlogPostAdminSendToReviewStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminSendToReviewRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostAdminSendToReviewPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/blog-posts/${string}/send-to-review`;
};

/**
 * @type object
 */
export type BlogPostAdminSendToReviewResponses = {
  "200": BlogPostAdminSendToReviewStatus200;
  "204": BlogPostAdminSendToReviewStatus204;
  "400": BlogPostAdminSendToReviewStatus400;
  "401": BlogPostAdminSendToReviewStatus401;
  "403": BlogPostAdminSendToReviewStatus403;
  "404": BlogPostAdminSendToReviewStatus404;
  "500": BlogPostAdminSendToReviewStatus500;
  "501": BlogPostAdminSendToReviewStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminSendToReviewResponse =
  | BlogPostAdminSendToReviewStatus200
  | BlogPostAdminSendToReviewStatus204
  | BlogPostAdminSendToReviewStatus400
  | BlogPostAdminSendToReviewStatus401
  | BlogPostAdminSendToReviewStatus403
  | BlogPostAdminSendToReviewStatus404
  | BlogPostAdminSendToReviewStatus500
  | BlogPostAdminSendToReviewStatus501;
