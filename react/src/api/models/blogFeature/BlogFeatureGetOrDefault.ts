/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitBlogsBlogFeatureDto } from "../volo/cmsKit/blogs/BlogFeatureDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogFeatureGetOrDefaultPathBlogId = string;

/**
 * @type string
 */
export type BlogFeatureGetOrDefaultPathFeatureName = string;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus200Plain = VoloCmsKitBlogsBlogFeatureDto;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus200Json = VoloCmsKitBlogsBlogFeatureDto;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus200Json2 = VoloCmsKitBlogsBlogFeatureDto;

export type BlogFeatureGetOrDefaultStatus200 =
  | BlogFeatureGetOrDefaultStatus200Plain
  | BlogFeatureGetOrDefaultStatus200Json
  | BlogFeatureGetOrDefaultStatus200Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus400 =
  | BlogFeatureGetOrDefaultStatus400Plain
  | BlogFeatureGetOrDefaultStatus400Json
  | BlogFeatureGetOrDefaultStatus400Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus401 =
  | BlogFeatureGetOrDefaultStatus401Plain
  | BlogFeatureGetOrDefaultStatus401Json
  | BlogFeatureGetOrDefaultStatus401Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus403 =
  | BlogFeatureGetOrDefaultStatus403Plain
  | BlogFeatureGetOrDefaultStatus403Json
  | BlogFeatureGetOrDefaultStatus403Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus404 =
  | BlogFeatureGetOrDefaultStatus404Plain
  | BlogFeatureGetOrDefaultStatus404Json
  | BlogFeatureGetOrDefaultStatus404Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus500 =
  | BlogFeatureGetOrDefaultStatus500Plain
  | BlogFeatureGetOrDefaultStatus500Json
  | BlogFeatureGetOrDefaultStatus500Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogFeatureGetOrDefaultStatus501 =
  | BlogFeatureGetOrDefaultStatus501Plain
  | BlogFeatureGetOrDefaultStatus501Json
  | BlogFeatureGetOrDefaultStatus501Json2;

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    blogId: BlogFeatureGetOrDefaultPathBlogId;
    featureName: BlogFeatureGetOrDefaultPathFeatureName;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit/blogs/${string}/features/${string}`;
};

/**
 * @type object
 */
export type BlogFeatureGetOrDefaultResponses = {
  "200": BlogFeatureGetOrDefaultStatus200;
  "400": BlogFeatureGetOrDefaultStatus400;
  "401": BlogFeatureGetOrDefaultStatus401;
  "403": BlogFeatureGetOrDefaultStatus403;
  "404": BlogFeatureGetOrDefaultStatus404;
  "500": BlogFeatureGetOrDefaultStatus500;
  "501": BlogFeatureGetOrDefaultStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogFeatureGetOrDefaultResponse =
  | BlogFeatureGetOrDefaultStatus200
  | BlogFeatureGetOrDefaultStatus400
  | BlogFeatureGetOrDefaultStatus401
  | BlogFeatureGetOrDefaultStatus403
  | BlogFeatureGetOrDefaultStatus404
  | BlogFeatureGetOrDefaultStatus500
  | BlogFeatureGetOrDefaultStatus501;
