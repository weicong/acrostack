/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitContentsBlogPostCommonDto } from "../volo/cmsKit/contents/BlogPostCommonDto.ts";

/**
 * @type string
 */
export type BlogPostPublicGetPathBlogSlug = string;

/**
 * @type string
 */
export type BlogPostPublicGetPathBlogPostSlug = string;

/**
 * @type object
 */
export type BlogPostPublicGetStatus200Plain = VoloCmsKitContentsBlogPostCommonDto;

/**
 * @type object
 */
export type BlogPostPublicGetStatus200Json = VoloCmsKitContentsBlogPostCommonDto;

/**
 * @type object
 */
export type BlogPostPublicGetStatus200Json2 = VoloCmsKitContentsBlogPostCommonDto;

export type BlogPostPublicGetStatus200 =
  | BlogPostPublicGetStatus200Plain
  | BlogPostPublicGetStatus200Json
  | BlogPostPublicGetStatus200Json2;

/**
 * @type object
 */
export type BlogPostPublicGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus400 =
  | BlogPostPublicGetStatus400Plain
  | BlogPostPublicGetStatus400Json
  | BlogPostPublicGetStatus400Json2;

/**
 * @type object
 */
export type BlogPostPublicGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus401 =
  | BlogPostPublicGetStatus401Plain
  | BlogPostPublicGetStatus401Json
  | BlogPostPublicGetStatus401Json2;

/**
 * @type object
 */
export type BlogPostPublicGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus403 =
  | BlogPostPublicGetStatus403Plain
  | BlogPostPublicGetStatus403Json
  | BlogPostPublicGetStatus403Json2;

/**
 * @type object
 */
export type BlogPostPublicGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus404 =
  | BlogPostPublicGetStatus404Plain
  | BlogPostPublicGetStatus404Json
  | BlogPostPublicGetStatus404Json2;

/**
 * @type object
 */
export type BlogPostPublicGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus500 =
  | BlogPostPublicGetStatus500Plain
  | BlogPostPublicGetStatus500Json
  | BlogPostPublicGetStatus500Json2;

/**
 * @type object
 */
export type BlogPostPublicGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetStatus501 =
  | BlogPostPublicGetStatus501Plain
  | BlogPostPublicGetStatus501Json
  | BlogPostPublicGetStatus501Json2;

/**
 * @type object
 */
export type BlogPostPublicGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blogSlug: BlogPostPublicGetPathBlogSlug;
    blogPostSlug: BlogPostPublicGetPathBlogPostSlug;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/blog-posts/${string}/${string}`;
};

/**
 * @type object
 */
export type BlogPostPublicGetResponses = {
  "200": BlogPostPublicGetStatus200;
  "400": BlogPostPublicGetStatus400;
  "401": BlogPostPublicGetStatus401;
  "403": BlogPostPublicGetStatus403;
  "404": BlogPostPublicGetStatus404;
  "500": BlogPostPublicGetStatus500;
  "501": BlogPostPublicGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostPublicGetResponse =
  | BlogPostPublicGetStatus200
  | BlogPostPublicGetStatus400
  | BlogPostPublicGetStatus401
  | BlogPostPublicGetStatus403
  | BlogPostPublicGetStatus404
  | BlogPostPublicGetStatus500
  | BlogPostPublicGetStatus501;
