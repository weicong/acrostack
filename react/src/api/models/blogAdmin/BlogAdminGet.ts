/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogDto } from "../volo/cmsKit/admin/blogs/BlogDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogAdminGetPathId = string;

/**
 * @type object
 */
export type BlogAdminGetStatus200Plain = VoloCmsKitAdminBlogsBlogDto;

/**
 * @type object
 */
export type BlogAdminGetStatus200Json = VoloCmsKitAdminBlogsBlogDto;

/**
 * @type object
 */
export type BlogAdminGetStatus200Json2 = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminGetStatus200 =
  | BlogAdminGetStatus200Plain
  | BlogAdminGetStatus200Json
  | BlogAdminGetStatus200Json2;

/**
 * @type object
 */
export type BlogAdminGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus400 =
  | BlogAdminGetStatus400Plain
  | BlogAdminGetStatus400Json
  | BlogAdminGetStatus400Json2;

/**
 * @type object
 */
export type BlogAdminGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus401 =
  | BlogAdminGetStatus401Plain
  | BlogAdminGetStatus401Json
  | BlogAdminGetStatus401Json2;

/**
 * @type object
 */
export type BlogAdminGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus403 =
  | BlogAdminGetStatus403Plain
  | BlogAdminGetStatus403Json
  | BlogAdminGetStatus403Json2;

/**
 * @type object
 */
export type BlogAdminGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus404 =
  | BlogAdminGetStatus404Plain
  | BlogAdminGetStatus404Json
  | BlogAdminGetStatus404Json2;

/**
 * @type object
 */
export type BlogAdminGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus500 =
  | BlogAdminGetStatus500Plain
  | BlogAdminGetStatus500Json
  | BlogAdminGetStatus500Json2;

/**
 * @type object
 */
export type BlogAdminGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminGetStatus501 =
  | BlogAdminGetStatus501Plain
  | BlogAdminGetStatus501Json
  | BlogAdminGetStatus501Json2;

/**
 * @type object
 */
export type BlogAdminGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogAdminGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/${string}`;
};

/**
 * @type object
 */
export type BlogAdminGetResponses = {
  "200": BlogAdminGetStatus200;
  "400": BlogAdminGetStatus400;
  "401": BlogAdminGetStatus401;
  "403": BlogAdminGetStatus403;
  "404": BlogAdminGetStatus404;
  "500": BlogAdminGetStatus500;
  "501": BlogAdminGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminGetResponse =
  | BlogAdminGetStatus200
  | BlogAdminGetStatus400
  | BlogAdminGetStatus401
  | BlogAdminGetStatus403
  | BlogAdminGetStatus404
  | BlogAdminGetStatus500
  | BlogAdminGetStatus501;
