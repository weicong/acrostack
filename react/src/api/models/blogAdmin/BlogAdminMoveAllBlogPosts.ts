/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogAdminMoveAllBlogPostsPathBlogId = string;

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type BlogAdminMoveAllBlogPostsQueryAssignToBlogId = string | undefined;

/**
 * @type any
 */
export type BlogAdminMoveAllBlogPostsStatus200 = any;

/**
 * @type any
 */
export type BlogAdminMoveAllBlogPostsStatus204 = any;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus400 =
  | BlogAdminMoveAllBlogPostsStatus400Plain
  | BlogAdminMoveAllBlogPostsStatus400Json
  | BlogAdminMoveAllBlogPostsStatus400Json2;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus401 =
  | BlogAdminMoveAllBlogPostsStatus401Plain
  | BlogAdminMoveAllBlogPostsStatus401Json
  | BlogAdminMoveAllBlogPostsStatus401Json2;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus403 =
  | BlogAdminMoveAllBlogPostsStatus403Plain
  | BlogAdminMoveAllBlogPostsStatus403Json
  | BlogAdminMoveAllBlogPostsStatus403Json2;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus404 =
  | BlogAdminMoveAllBlogPostsStatus404Plain
  | BlogAdminMoveAllBlogPostsStatus404Json
  | BlogAdminMoveAllBlogPostsStatus404Json2;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus500 =
  | BlogAdminMoveAllBlogPostsStatus500Plain
  | BlogAdminMoveAllBlogPostsStatus500Json
  | BlogAdminMoveAllBlogPostsStatus500Json2;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminMoveAllBlogPostsStatus501 =
  | BlogAdminMoveAllBlogPostsStatus501Plain
  | BlogAdminMoveAllBlogPostsStatus501Json
  | BlogAdminMoveAllBlogPostsStatus501Json2;

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blogId: BlogAdminMoveAllBlogPostsPathBlogId;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/${string}/move-all-blog-posts`;
};

/**
 * @type object
 */
export type BlogAdminMoveAllBlogPostsResponses = {
  "200": BlogAdminMoveAllBlogPostsStatus200;
  "204": BlogAdminMoveAllBlogPostsStatus204;
  "400": BlogAdminMoveAllBlogPostsStatus400;
  "401": BlogAdminMoveAllBlogPostsStatus401;
  "403": BlogAdminMoveAllBlogPostsStatus403;
  "404": BlogAdminMoveAllBlogPostsStatus404;
  "500": BlogAdminMoveAllBlogPostsStatus500;
  "501": BlogAdminMoveAllBlogPostsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminMoveAllBlogPostsResponse =
  | BlogAdminMoveAllBlogPostsStatus200
  | BlogAdminMoveAllBlogPostsStatus204
  | BlogAdminMoveAllBlogPostsStatus400
  | BlogAdminMoveAllBlogPostsStatus401
  | BlogAdminMoveAllBlogPostsStatus403
  | BlogAdminMoveAllBlogPostsStatus404
  | BlogAdminMoveAllBlogPostsStatus500
  | BlogAdminMoveAllBlogPostsStatus501;
