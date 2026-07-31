/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogPostDto } from "../acroStack/services/dtos/cms/BlogPostDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogPostGetPathId = string;

/**
 * @type object
 */
export type BlogPostGetStatus200Plain = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostGetStatus200Json = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostGetStatus200Json2 = AcroStackServicesDtosCmsBlogPostDto;

export type BlogPostGetStatus200 =
  | BlogPostGetStatus200Plain
  | BlogPostGetStatus200Json
  | BlogPostGetStatus200Json2;

/**
 * @type object
 */
export type BlogPostGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetStatus400 =
  | BlogPostGetStatus400Plain
  | BlogPostGetStatus400Json
  | BlogPostGetStatus400Json2;

/**
 * @type object
 */
export type BlogPostGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetStatus401 =
  | BlogPostGetStatus401Plain
  | BlogPostGetStatus401Json
  | BlogPostGetStatus401Json2;

/**
 * @type object
 */
export type BlogPostGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetStatus403 =
  | BlogPostGetStatus403Plain
  | BlogPostGetStatus403Json
  | BlogPostGetStatus403Json2;

/**
 * @type object
 */
export type BlogPostGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetStatus404 =
  | BlogPostGetStatus404Plain
  | BlogPostGetStatus404Json
  | BlogPostGetStatus404Json2;

/**
 * @type object
 */
export type BlogPostGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetStatus500 =
  | BlogPostGetStatus500Plain
  | BlogPostGetStatus500Json
  | BlogPostGetStatus500Json2;

/**
 * @type object
 */
export type BlogPostGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostGetStatus501 =
  | BlogPostGetStatus501Plain
  | BlogPostGetStatus501Json
  | BlogPostGetStatus501Json2;

/**
 * @type object
 */
export type BlogPostGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogPostGetPathId;
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
export type BlogPostGetResponses = {
  "200": BlogPostGetStatus200;
  "400": BlogPostGetStatus400;
  "401": BlogPostGetStatus401;
  "403": BlogPostGetStatus403;
  "404": BlogPostGetStatus404;
  "500": BlogPostGetStatus500;
  "501": BlogPostGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostGetResponse =
  | BlogPostGetStatus200
  | BlogPostGetStatus400
  | BlogPostGetStatus401
  | BlogPostGetStatus403
  | BlogPostGetStatus404
  | BlogPostGetStatus500
  | BlogPostGetStatus501;
