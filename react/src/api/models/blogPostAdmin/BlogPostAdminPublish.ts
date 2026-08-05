/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostAdminPublishPathId = string;

/**
 * @type any
 */
export type BlogPostAdminPublishStatus200 = any;

/**
 * @type any
 */
export type BlogPostAdminPublishStatus204 = any;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus400 =
  | BlogPostAdminPublishStatus400Plain
  | BlogPostAdminPublishStatus400Json
  | BlogPostAdminPublishStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus401 =
  | BlogPostAdminPublishStatus401Plain
  | BlogPostAdminPublishStatus401Json
  | BlogPostAdminPublishStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus403 =
  | BlogPostAdminPublishStatus403Plain
  | BlogPostAdminPublishStatus403Json
  | BlogPostAdminPublishStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus404 =
  | BlogPostAdminPublishStatus404Plain
  | BlogPostAdminPublishStatus404Json
  | BlogPostAdminPublishStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus500 =
  | BlogPostAdminPublishStatus500Plain
  | BlogPostAdminPublishStatus500Json
  | BlogPostAdminPublishStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminPublishStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminPublishStatus501 =
  | BlogPostAdminPublishStatus501Plain
  | BlogPostAdminPublishStatus501Json
  | BlogPostAdminPublishStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminPublishRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostAdminPublishPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/blog-posts/${string}/publish`;
};

/**
 * @type object
 */
export type BlogPostAdminPublishResponses = {
  "200": BlogPostAdminPublishStatus200;
  "204": BlogPostAdminPublishStatus204;
  "400": BlogPostAdminPublishStatus400;
  "401": BlogPostAdminPublishStatus401;
  "403": BlogPostAdminPublishStatus403;
  "404": BlogPostAdminPublishStatus404;
  "500": BlogPostAdminPublishStatus500;
  "501": BlogPostAdminPublishStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminPublishResponse =
  | BlogPostAdminPublishStatus200
  | BlogPostAdminPublishStatus204
  | BlogPostAdminPublishStatus400
  | BlogPostAdminPublishStatus401
  | BlogPostAdminPublishStatus403
  | BlogPostAdminPublishStatus404
  | BlogPostAdminPublishStatus500
  | BlogPostAdminPublishStatus501;
