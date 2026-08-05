/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostPublicDeletePathId = string;

/**
 * @type any
 */
export type BlogPostPublicDeleteStatus200 = any;

/**
 * @type any
 */
export type BlogPostPublicDeleteStatus204 = any;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus400 =
  | BlogPostPublicDeleteStatus400Plain
  | BlogPostPublicDeleteStatus400Json
  | BlogPostPublicDeleteStatus400Json2;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus401 =
  | BlogPostPublicDeleteStatus401Plain
  | BlogPostPublicDeleteStatus401Json
  | BlogPostPublicDeleteStatus401Json2;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus403 =
  | BlogPostPublicDeleteStatus403Plain
  | BlogPostPublicDeleteStatus403Json
  | BlogPostPublicDeleteStatus403Json2;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus404 =
  | BlogPostPublicDeleteStatus404Plain
  | BlogPostPublicDeleteStatus404Json
  | BlogPostPublicDeleteStatus404Json2;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus500 =
  | BlogPostPublicDeleteStatus500Plain
  | BlogPostPublicDeleteStatus500Json
  | BlogPostPublicDeleteStatus500Json2;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicDeleteStatus501 =
  | BlogPostPublicDeleteStatus501Plain
  | BlogPostPublicDeleteStatus501Json
  | BlogPostPublicDeleteStatus501Json2;

/**
 * @type object
 */
export type BlogPostPublicDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostPublicDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/blog-posts/${string}`;
};

/**
 * @type object
 */
export type BlogPostPublicDeleteResponses = {
  "200": BlogPostPublicDeleteStatus200;
  "204": BlogPostPublicDeleteStatus204;
  "400": BlogPostPublicDeleteStatus400;
  "401": BlogPostPublicDeleteStatus401;
  "403": BlogPostPublicDeleteStatus403;
  "404": BlogPostPublicDeleteStatus404;
  "500": BlogPostPublicDeleteStatus500;
  "501": BlogPostPublicDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostPublicDeleteResponse =
  | BlogPostPublicDeleteStatus200
  | BlogPostPublicDeleteStatus204
  | BlogPostPublicDeleteStatus400
  | BlogPostPublicDeleteStatus401
  | BlogPostPublicDeleteStatus403
  | BlogPostPublicDeleteStatus404
  | BlogPostPublicDeleteStatus500
  | BlogPostPublicDeleteStatus501;
