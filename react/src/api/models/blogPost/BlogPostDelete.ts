/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostDeletePathId = string;

/**
 * @type any
 */
export type BlogPostDeleteStatus200 = any;

/**
 * @type any
 */
export type BlogPostDeleteStatus204 = any;

/**
 * @type object
 */
export type BlogPostDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostDeleteStatus400 =
  | BlogPostDeleteStatus400Plain
  | BlogPostDeleteStatus400Json
  | BlogPostDeleteStatus400Json2;

/**
 * @type object
 */
export type BlogPostDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostDeleteStatus401 =
  | BlogPostDeleteStatus401Plain
  | BlogPostDeleteStatus401Json
  | BlogPostDeleteStatus401Json2;

/**
 * @type object
 */
export type BlogPostDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostDeleteStatus403 =
  | BlogPostDeleteStatus403Plain
  | BlogPostDeleteStatus403Json
  | BlogPostDeleteStatus403Json2;

/**
 * @type object
 */
export type BlogPostDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostDeleteStatus404 =
  | BlogPostDeleteStatus404Plain
  | BlogPostDeleteStatus404Json
  | BlogPostDeleteStatus404Json2;

/**
 * @type object
 */
export type BlogPostDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostDeleteStatus500 =
  | BlogPostDeleteStatus500Plain
  | BlogPostDeleteStatus500Json
  | BlogPostDeleteStatus500Json2;

/**
 * @type object
 */
export type BlogPostDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostDeleteStatus501 =
  | BlogPostDeleteStatus501Plain
  | BlogPostDeleteStatus501Json
  | BlogPostDeleteStatus501Json2;

/**
 * @type object
 */
export type BlogPostDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/blog-post/${string}`;
};

/**
 * @type object
 */
export type BlogPostDeleteResponses = {
  "200": BlogPostDeleteStatus200;
  "204": BlogPostDeleteStatus204;
  "400": BlogPostDeleteStatus400;
  "401": BlogPostDeleteStatus401;
  "403": BlogPostDeleteStatus403;
  "404": BlogPostDeleteStatus404;
  "500": BlogPostDeleteStatus500;
  "501": BlogPostDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostDeleteResponse =
  | BlogPostDeleteStatus200
  | BlogPostDeleteStatus204
  | BlogPostDeleteStatus400
  | BlogPostDeleteStatus401
  | BlogPostDeleteStatus403
  | BlogPostDeleteStatus404
  | BlogPostDeleteStatus500
  | BlogPostDeleteStatus501;
