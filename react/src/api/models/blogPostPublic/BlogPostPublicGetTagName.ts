/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogPostPublicGetTagNameQueryTagId = string | undefined;

/**
 * @type string
 */
export type BlogPostPublicGetTagNamePathId = string;

/**
 * @type string
 */
export type BlogPostPublicGetTagNameStatus200Plain = string;

/**
 * @type string
 */
export type BlogPostPublicGetTagNameStatus200Json = string;

/**
 * @type string
 */
export type BlogPostPublicGetTagNameStatus200Json2 = string;

export type BlogPostPublicGetTagNameStatus200 =
  | BlogPostPublicGetTagNameStatus200Plain
  | BlogPostPublicGetTagNameStatus200Json
  | BlogPostPublicGetTagNameStatus200Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus400 =
  | BlogPostPublicGetTagNameStatus400Plain
  | BlogPostPublicGetTagNameStatus400Json
  | BlogPostPublicGetTagNameStatus400Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus401 =
  | BlogPostPublicGetTagNameStatus401Plain
  | BlogPostPublicGetTagNameStatus401Json
  | BlogPostPublicGetTagNameStatus401Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus403 =
  | BlogPostPublicGetTagNameStatus403Plain
  | BlogPostPublicGetTagNameStatus403Json
  | BlogPostPublicGetTagNameStatus403Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus404 =
  | BlogPostPublicGetTagNameStatus404Plain
  | BlogPostPublicGetTagNameStatus404Json
  | BlogPostPublicGetTagNameStatus404Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus500 =
  | BlogPostPublicGetTagNameStatus500Plain
  | BlogPostPublicGetTagNameStatus500Json
  | BlogPostPublicGetTagNameStatus500Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetTagNameStatus501 =
  | BlogPostPublicGetTagNameStatus501Plain
  | BlogPostPublicGetTagNameStatus501Json
  | BlogPostPublicGetTagNameStatus501Json2;

/**
 * @type object
 */
export type BlogPostPublicGetTagNameRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostPublicGetTagNamePathId;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    tagId?: BlogPostPublicGetTagNameQueryTagId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/blog-posts/tags/${string}`;
};

/**
 * @type object
 */
export type BlogPostPublicGetTagNameResponses = {
  "200": BlogPostPublicGetTagNameStatus200;
  "400": BlogPostPublicGetTagNameStatus400;
  "401": BlogPostPublicGetTagNameStatus401;
  "403": BlogPostPublicGetTagNameStatus403;
  "404": BlogPostPublicGetTagNameStatus404;
  "500": BlogPostPublicGetTagNameStatus500;
  "501": BlogPostPublicGetTagNameStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostPublicGetTagNameResponse =
  | BlogPostPublicGetTagNameStatus200
  | BlogPostPublicGetTagNameStatus400
  | BlogPostPublicGetTagNameStatus401
  | BlogPostPublicGetTagNameStatus403
  | BlogPostPublicGetTagNameStatus404
  | BlogPostPublicGetTagNameStatus500
  | BlogPostPublicGetTagNameStatus501;
