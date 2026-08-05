/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostAdminDraftPathId = string;

/**
 * @type any
 */
export type BlogPostAdminDraftStatus200 = any;

/**
 * @type any
 */
export type BlogPostAdminDraftStatus204 = any;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus400 =
  | BlogPostAdminDraftStatus400Plain
  | BlogPostAdminDraftStatus400Json
  | BlogPostAdminDraftStatus400Json2;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus401 =
  | BlogPostAdminDraftStatus401Plain
  | BlogPostAdminDraftStatus401Json
  | BlogPostAdminDraftStatus401Json2;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus403 =
  | BlogPostAdminDraftStatus403Plain
  | BlogPostAdminDraftStatus403Json
  | BlogPostAdminDraftStatus403Json2;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus404 =
  | BlogPostAdminDraftStatus404Plain
  | BlogPostAdminDraftStatus404Json
  | BlogPostAdminDraftStatus404Json2;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus500 =
  | BlogPostAdminDraftStatus500Plain
  | BlogPostAdminDraftStatus500Json
  | BlogPostAdminDraftStatus500Json2;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostAdminDraftStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostAdminDraftStatus501 =
  | BlogPostAdminDraftStatus501Plain
  | BlogPostAdminDraftStatus501Json
  | BlogPostAdminDraftStatus501Json2;

/**
 * @type object
 */
export type BlogPostAdminDraftRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostAdminDraftPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/blog-posts/${string}/draft`;
};

/**
 * @type object
 */
export type BlogPostAdminDraftResponses = {
  "200": BlogPostAdminDraftStatus200;
  "204": BlogPostAdminDraftStatus204;
  "400": BlogPostAdminDraftStatus400;
  "401": BlogPostAdminDraftStatus401;
  "403": BlogPostAdminDraftStatus403;
  "404": BlogPostAdminDraftStatus404;
  "500": BlogPostAdminDraftStatus500;
  "501": BlogPostAdminDraftStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostAdminDraftResponse =
  | BlogPostAdminDraftStatus200
  | BlogPostAdminDraftStatus204
  | BlogPostAdminDraftStatus400
  | BlogPostAdminDraftStatus401
  | BlogPostAdminDraftStatus403
  | BlogPostAdminDraftStatus404
  | BlogPostAdminDraftStatus500
  | BlogPostAdminDraftStatus501;
