/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogDto } from "../volo/cmsKit/admin/blogs/BlogDto.ts";
import type { VoloCmsKitAdminBlogsUpdateBlogDto } from "../volo/cmsKit/admin/blogs/UpdateBlogDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogAdminUpdatePathId = string;

/**
 * @type object
 */
export type BlogAdminUpdateStatus200Plain = VoloCmsKitAdminBlogsBlogDto;

/**
 * @type object
 */
export type BlogAdminUpdateStatus200Json = VoloCmsKitAdminBlogsBlogDto;

/**
 * @type object
 */
export type BlogAdminUpdateStatus200Json2 = VoloCmsKitAdminBlogsBlogDto;

export type BlogAdminUpdateStatus200 =
  | BlogAdminUpdateStatus200Plain
  | BlogAdminUpdateStatus200Json
  | BlogAdminUpdateStatus200Json2;

/**
 * @type object
 */
export type BlogAdminUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus400 =
  | BlogAdminUpdateStatus400Plain
  | BlogAdminUpdateStatus400Json
  | BlogAdminUpdateStatus400Json2;

/**
 * @type object
 */
export type BlogAdminUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus401 =
  | BlogAdminUpdateStatus401Plain
  | BlogAdminUpdateStatus401Json
  | BlogAdminUpdateStatus401Json2;

/**
 * @type object
 */
export type BlogAdminUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus403 =
  | BlogAdminUpdateStatus403Plain
  | BlogAdminUpdateStatus403Json
  | BlogAdminUpdateStatus403Json2;

/**
 * @type object
 */
export type BlogAdminUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus404 =
  | BlogAdminUpdateStatus404Plain
  | BlogAdminUpdateStatus404Json
  | BlogAdminUpdateStatus404Json2;

/**
 * @type object
 */
export type BlogAdminUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus500 =
  | BlogAdminUpdateStatus500Plain
  | BlogAdminUpdateStatus500Json
  | BlogAdminUpdateStatus500Json2;

/**
 * @type object
 */
export type BlogAdminUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminUpdateStatus501 =
  | BlogAdminUpdateStatus501Plain
  | BlogAdminUpdateStatus501Json
  | BlogAdminUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogAdminUpdateJsonData =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogAdminUpdateJson2Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type BlogAdminUpdateJson3Data =
  | Omit<NonNullable<VoloCmsKitAdminBlogsUpdateBlogDto>, "extraProperties">
  | undefined;

export type BlogAdminUpdateData =
  | BlogAdminUpdateJsonData
  | BlogAdminUpdateJson2Data
  | BlogAdminUpdateJson3Data;

/**
 * @type object
 */
export type BlogAdminUpdateRequestConfig = {
  data?: BlogAdminUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: BlogAdminUpdatePathId;
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
export type BlogAdminUpdateResponses = {
  "200": BlogAdminUpdateStatus200;
  "400": BlogAdminUpdateStatus400;
  "401": BlogAdminUpdateStatus401;
  "403": BlogAdminUpdateStatus403;
  "404": BlogAdminUpdateStatus404;
  "500": BlogAdminUpdateStatus500;
  "501": BlogAdminUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminUpdateResponse =
  | BlogAdminUpdateStatus200
  | BlogAdminUpdateStatus400
  | BlogAdminUpdateStatus401
  | BlogAdminUpdateStatus403
  | BlogAdminUpdateStatus404
  | BlogAdminUpdateStatus500
  | BlogAdminUpdateStatus501;
