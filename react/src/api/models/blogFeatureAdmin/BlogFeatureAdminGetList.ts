/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitBlogsBlogFeatureDto } from "../volo/cmsKit/blogs/BlogFeatureDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogFeatureAdminGetListPathBlogId = string;

/**
 * @type array
 */
export type BlogFeatureAdminGetListStatus200Plain = VoloCmsKitBlogsBlogFeatureDto[];

/**
 * @type array
 */
export type BlogFeatureAdminGetListStatus200Json = VoloCmsKitBlogsBlogFeatureDto[];

/**
 * @type array
 */
export type BlogFeatureAdminGetListStatus200Json2 = VoloCmsKitBlogsBlogFeatureDto[];

export type BlogFeatureAdminGetListStatus200 =
  | BlogFeatureAdminGetListStatus200Plain
  | BlogFeatureAdminGetListStatus200Json
  | BlogFeatureAdminGetListStatus200Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus400 =
  | BlogFeatureAdminGetListStatus400Plain
  | BlogFeatureAdminGetListStatus400Json
  | BlogFeatureAdminGetListStatus400Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus401 =
  | BlogFeatureAdminGetListStatus401Plain
  | BlogFeatureAdminGetListStatus401Json
  | BlogFeatureAdminGetListStatus401Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus403 =
  | BlogFeatureAdminGetListStatus403Plain
  | BlogFeatureAdminGetListStatus403Json
  | BlogFeatureAdminGetListStatus403Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus404 =
  | BlogFeatureAdminGetListStatus404Plain
  | BlogFeatureAdminGetListStatus404Json
  | BlogFeatureAdminGetListStatus404Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus500 =
  | BlogFeatureAdminGetListStatus500Plain
  | BlogFeatureAdminGetListStatus500Json
  | BlogFeatureAdminGetListStatus500Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminGetListStatus501 =
  | BlogFeatureAdminGetListStatus501Plain
  | BlogFeatureAdminGetListStatus501Json
  | BlogFeatureAdminGetListStatus501Json2;

/**
 * @type object
 */
export type BlogFeatureAdminGetListRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blogId: BlogFeatureAdminGetListPathBlogId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/${string}/features`;
};

/**
 * @type object
 */
export type BlogFeatureAdminGetListResponses = {
  "200": BlogFeatureAdminGetListStatus200;
  "400": BlogFeatureAdminGetListStatus400;
  "401": BlogFeatureAdminGetListStatus401;
  "403": BlogFeatureAdminGetListStatus403;
  "404": BlogFeatureAdminGetListStatus404;
  "500": BlogFeatureAdminGetListStatus500;
  "501": BlogFeatureAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogFeatureAdminGetListResponse =
  | BlogFeatureAdminGetListStatus200
  | BlogFeatureAdminGetListStatus400
  | BlogFeatureAdminGetListStatus401
  | BlogFeatureAdminGetListStatus403
  | BlogFeatureAdminGetListStatus404
  | BlogFeatureAdminGetListStatus500
  | BlogFeatureAdminGetListStatus501;
