/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogPostDto } from "../acroStack/services/dtos/cms/BlogPostDto.ts";
import type { AcroStackServicesDtosCmsUpdateBlogPostInput } from "../acroStack/services/dtos/cms/UpdateBlogPostInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostUpdatePathId = string;

/**
 * @type object
 */
export type BlogPostUpdateStatus200Plain = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostUpdateStatus200Json = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostUpdateStatus200Json2 = AcroStackServicesDtosCmsBlogPostDto;

export type BlogPostUpdateStatus200 =
  | BlogPostUpdateStatus200Plain
  | BlogPostUpdateStatus200Json
  | BlogPostUpdateStatus200Json2;

/**
 * @type object
 */
export type BlogPostUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostUpdateStatus400 =
  | BlogPostUpdateStatus400Plain
  | BlogPostUpdateStatus400Json
  | BlogPostUpdateStatus400Json2;

/**
 * @type object
 */
export type BlogPostUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostUpdateStatus401 =
  | BlogPostUpdateStatus401Plain
  | BlogPostUpdateStatus401Json
  | BlogPostUpdateStatus401Json2;

/**
 * @type object
 */
export type BlogPostUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostUpdateStatus403 =
  | BlogPostUpdateStatus403Plain
  | BlogPostUpdateStatus403Json
  | BlogPostUpdateStatus403Json2;

/**
 * @type object
 */
export type BlogPostUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostUpdateStatus404 =
  | BlogPostUpdateStatus404Plain
  | BlogPostUpdateStatus404Json
  | BlogPostUpdateStatus404Json2;

/**
 * @type object
 */
export type BlogPostUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostUpdateStatus500 =
  | BlogPostUpdateStatus500Plain
  | BlogPostUpdateStatus500Json
  | BlogPostUpdateStatus500Json2;

/**
 * @type object
 */
export type BlogPostUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostUpdateStatus501 =
  | BlogPostUpdateStatus501Plain
  | BlogPostUpdateStatus501Json
  | BlogPostUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogPostUpdateJsonData = AcroStackServicesDtosCmsUpdateBlogPostInput | undefined;

/**
 * @type object | undefined
 */
export type BlogPostUpdateJson2Data = AcroStackServicesDtosCmsUpdateBlogPostInput | undefined;

/**
 * @type object | undefined
 */
export type BlogPostUpdateJson3Data = AcroStackServicesDtosCmsUpdateBlogPostInput | undefined;

export type BlogPostUpdateData =
  | BlogPostUpdateJsonData
  | BlogPostUpdateJson2Data
  | BlogPostUpdateJson3Data;

/**
 * @type object
 */
export type BlogPostUpdateRequestConfig = {
  data?: BlogPostUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/blog-post/${string}`;
};

/**
 * @type object
 */
export type BlogPostUpdateResponses = {
  "200": BlogPostUpdateStatus200;
  "400": BlogPostUpdateStatus400;
  "401": BlogPostUpdateStatus401;
  "403": BlogPostUpdateStatus403;
  "404": BlogPostUpdateStatus404;
  "500": BlogPostUpdateStatus500;
  "501": BlogPostUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostUpdateResponse =
  | BlogPostUpdateStatus200
  | BlogPostUpdateStatus400
  | BlogPostUpdateStatus401
  | BlogPostUpdateStatus403
  | BlogPostUpdateStatus404
  | BlogPostUpdateStatus500
  | BlogPostUpdateStatus501;
