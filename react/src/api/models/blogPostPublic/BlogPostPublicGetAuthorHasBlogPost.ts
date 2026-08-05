/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitUsersCmsUserDto } from "../volo/cmsKit/users/CmsUserDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostPublicGetAuthorHasBlogPostPathId = string;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus200Plain = VoloCmsKitUsersCmsUserDto;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus200Json = VoloCmsKitUsersCmsUserDto;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus200Json2 = VoloCmsKitUsersCmsUserDto;

export type BlogPostPublicGetAuthorHasBlogPostStatus200 =
  | BlogPostPublicGetAuthorHasBlogPostStatus200Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus200Json
  | BlogPostPublicGetAuthorHasBlogPostStatus200Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus400 =
  | BlogPostPublicGetAuthorHasBlogPostStatus400Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus400Json
  | BlogPostPublicGetAuthorHasBlogPostStatus400Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus401 =
  | BlogPostPublicGetAuthorHasBlogPostStatus401Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus401Json
  | BlogPostPublicGetAuthorHasBlogPostStatus401Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus403 =
  | BlogPostPublicGetAuthorHasBlogPostStatus403Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus403Json
  | BlogPostPublicGetAuthorHasBlogPostStatus403Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus404 =
  | BlogPostPublicGetAuthorHasBlogPostStatus404Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus404Json
  | BlogPostPublicGetAuthorHasBlogPostStatus404Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus500 =
  | BlogPostPublicGetAuthorHasBlogPostStatus500Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus500Json
  | BlogPostPublicGetAuthorHasBlogPostStatus500Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostPublicGetAuthorHasBlogPostStatus501 =
  | BlogPostPublicGetAuthorHasBlogPostStatus501Plain
  | BlogPostPublicGetAuthorHasBlogPostStatus501Json
  | BlogPostPublicGetAuthorHasBlogPostStatus501Json2;

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostPublicGetAuthorHasBlogPostPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-public/blog-posts/authors/${string}`;
};

/**
 * @type object
 */
export type BlogPostPublicGetAuthorHasBlogPostResponses = {
  "200": BlogPostPublicGetAuthorHasBlogPostStatus200;
  "400": BlogPostPublicGetAuthorHasBlogPostStatus400;
  "401": BlogPostPublicGetAuthorHasBlogPostStatus401;
  "403": BlogPostPublicGetAuthorHasBlogPostStatus403;
  "404": BlogPostPublicGetAuthorHasBlogPostStatus404;
  "500": BlogPostPublicGetAuthorHasBlogPostStatus500;
  "501": BlogPostPublicGetAuthorHasBlogPostStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostPublicGetAuthorHasBlogPostResponse =
  | BlogPostPublicGetAuthorHasBlogPostStatus200
  | BlogPostPublicGetAuthorHasBlogPostStatus400
  | BlogPostPublicGetAuthorHasBlogPostStatus401
  | BlogPostPublicGetAuthorHasBlogPostStatus403
  | BlogPostPublicGetAuthorHasBlogPostStatus404
  | BlogPostPublicGetAuthorHasBlogPostStatus500
  | BlogPostPublicGetAuthorHasBlogPostStatus501;
