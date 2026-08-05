/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitAdminBlogsBlogFeatureInputDto } from "../volo/cmsKit/admin/blogs/BlogFeatureInputDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogFeatureAdminSetPathBlogId = string;

/**
 * @type any
 */
export type BlogFeatureAdminSetStatus200 = any;

/**
 * @type any
 */
export type BlogFeatureAdminSetStatus204 = any;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus400 =
  | BlogFeatureAdminSetStatus400Plain
  | BlogFeatureAdminSetStatus400Json
  | BlogFeatureAdminSetStatus400Json2;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus401 =
  | BlogFeatureAdminSetStatus401Plain
  | BlogFeatureAdminSetStatus401Json
  | BlogFeatureAdminSetStatus401Json2;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus403 =
  | BlogFeatureAdminSetStatus403Plain
  | BlogFeatureAdminSetStatus403Json
  | BlogFeatureAdminSetStatus403Json2;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus404 =
  | BlogFeatureAdminSetStatus404Plain
  | BlogFeatureAdminSetStatus404Json
  | BlogFeatureAdminSetStatus404Json2;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus500 =
  | BlogFeatureAdminSetStatus500Plain
  | BlogFeatureAdminSetStatus500Json
  | BlogFeatureAdminSetStatus500Json2;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureAdminSetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureAdminSetStatus501 =
  | BlogFeatureAdminSetStatus501Plain
  | BlogFeatureAdminSetStatus501Json
  | BlogFeatureAdminSetStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogFeatureAdminSetJsonData = VoloCmsKitAdminBlogsBlogFeatureInputDto | undefined;

/**
 * @type object | undefined
 */
export type BlogFeatureAdminSetJson2Data = VoloCmsKitAdminBlogsBlogFeatureInputDto | undefined;

/**
 * @type object | undefined
 */
export type BlogFeatureAdminSetJson3Data = VoloCmsKitAdminBlogsBlogFeatureInputDto | undefined;

export type BlogFeatureAdminSetData =
  | BlogFeatureAdminSetJsonData
  | BlogFeatureAdminSetJson2Data
  | BlogFeatureAdminSetJson3Data;

/**
 * @type object
 */
export type BlogFeatureAdminSetRequestConfig = {
  data?: BlogFeatureAdminSetData;
  /**
   * @type object
   */
  pathParams: {
    blogId: BlogFeatureAdminSetPathBlogId;
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
export type BlogFeatureAdminSetResponses = {
  "200": BlogFeatureAdminSetStatus200;
  "204": BlogFeatureAdminSetStatus204;
  "400": BlogFeatureAdminSetStatus400;
  "401": BlogFeatureAdminSetStatus401;
  "403": BlogFeatureAdminSetStatus403;
  "404": BlogFeatureAdminSetStatus404;
  "500": BlogFeatureAdminSetStatus500;
  "501": BlogFeatureAdminSetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogFeatureAdminSetResponse =
  | BlogFeatureAdminSetStatus200
  | BlogFeatureAdminSetStatus204
  | BlogFeatureAdminSetStatus400
  | BlogFeatureAdminSetStatus401
  | BlogFeatureAdminSetStatus403
  | BlogFeatureAdminSetStatus404
  | BlogFeatureAdminSetStatus500
  | BlogFeatureAdminSetStatus501;
