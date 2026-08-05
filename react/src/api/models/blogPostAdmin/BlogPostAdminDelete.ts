/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostAdminDeletePathId = string;

/**
 * @type any
 */
export type BlogPostAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type BlogPostAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus400 =
  | BlogPostAdminDeleteStatus400Plain
  | BlogPostAdminDeleteStatus400Json
  | BlogPostAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus401 =
  | BlogPostAdminDeleteStatus401Plain
  | BlogPostAdminDeleteStatus401Json
  | BlogPostAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus403 =
  | BlogPostAdminDeleteStatus403Plain
  | BlogPostAdminDeleteStatus403Json
  | BlogPostAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus404 =
  | BlogPostAdminDeleteStatus404Plain
  | BlogPostAdminDeleteStatus404Json
  | BlogPostAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus500 =
  | BlogPostAdminDeleteStatus500Plain
  | BlogPostAdminDeleteStatus500Json
  | BlogPostAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDeleteStatus501 =
  | BlogPostAdminDeleteStatus501Plain
  | BlogPostAdminDeleteStatus501Json
  | BlogPostAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostAdminDeletePathId;
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
export type BlogPostAdminDeleteResponses = {
  "200": BlogPostAdminDeleteStatus200;
  "204": BlogPostAdminDeleteStatus204;
  "400": BlogPostAdminDeleteStatus400;
  "401": BlogPostAdminDeleteStatus401;
  "403": BlogPostAdminDeleteStatus403;
  "404": BlogPostAdminDeleteStatus404;
  "500": BlogPostAdminDeleteStatus500;
  "501": BlogPostAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminDeleteResponse =
  | BlogPostAdminDeleteStatus200
  | BlogPostAdminDeleteStatus204
  | BlogPostAdminDeleteStatus400
  | BlogPostAdminDeleteStatus401
  | BlogPostAdminDeleteStatus403
  | BlogPostAdminDeleteStatus404
  | BlogPostAdminDeleteStatus500
  | BlogPostAdminDeleteStatus501;
