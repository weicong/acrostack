/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogDto } from "../volo/cmsKit/admin/blogs/BlogDto.ts";
import type { VoloCmsKitAdminBlogsCreateBlogDto } from "../volo/cmsKit/admin/blogs/CreateBlogDto.ts";

/**
 * @type object
 */
export type BlogAdminCreateStatus200Plain = VoloCmsKitAdminBlogsBlogDto;

/**
 * @type object
 */
export type BlogAdminCreateStatus200Json = VoloCmsKitAdminBlogsBlogDto;

/**
 * @type object
 */
export type BlogAdminCreateStatus200Json2 = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminCreateStatus200 =
  | BlogAdminCreateStatus200Plain
  | BlogAdminCreateStatus200Json
  | BlogAdminCreateStatus200Json2;

/**
 * @type object
 */
export type BlogAdminCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus400 =
  | BlogAdminCreateStatus400Plain
  | BlogAdminCreateStatus400Json
  | BlogAdminCreateStatus400Json2;

/**
 * @type object
 */
export type BlogAdminCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus401 =
  | BlogAdminCreateStatus401Plain
  | BlogAdminCreateStatus401Json
  | BlogAdminCreateStatus401Json2;

/**
 * @type object
 */
export type BlogAdminCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus403 =
  | BlogAdminCreateStatus403Plain
  | BlogAdminCreateStatus403Json
  | BlogAdminCreateStatus403Json2;

/**
 * @type object
 */
export type BlogAdminCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus404 =
  | BlogAdminCreateStatus404Plain
  | BlogAdminCreateStatus404Json
  | BlogAdminCreateStatus404Json2;

/**
 * @type object
 */
export type BlogAdminCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus500 =
  | BlogAdminCreateStatus500Plain
  | BlogAdminCreateStatus500Json
  | BlogAdminCreateStatus500Json2;

/**
 * @type object
 */
export type BlogAdminCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminCreateStatus501 =
  | BlogAdminCreateStatus501Plain
  | BlogAdminCreateStatus501Json
  | BlogAdminCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogAdminCreateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogAdminCreateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogAdminCreateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsCreateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminCreateData =
  | BlogAdminCreateJsonData
  | BlogAdminCreateJson2Data
  | BlogAdminCreateJson3Data;

/**
 * @type object
 */
export type BlogAdminCreateRequestConfig = {
  data?: BlogAdminCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/blogs";
};

/**
 * @type object
 */
export type BlogAdminCreateResponses = {
  "200": BlogAdminCreateStatus200;
  "400": BlogAdminCreateStatus400;
  "401": BlogAdminCreateStatus401;
  "403": BlogAdminCreateStatus403;
  "404": BlogAdminCreateStatus404;
  "500": BlogAdminCreateStatus500;
  "501": BlogAdminCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminCreateResponse =
  | BlogAdminCreateStatus200
  | BlogAdminCreateStatus400
  | BlogAdminCreateStatus401
  | BlogAdminCreateStatus403
  | BlogAdminCreateStatus404
  | BlogAdminCreateStatus500
  | BlogAdminCreateStatus501;
