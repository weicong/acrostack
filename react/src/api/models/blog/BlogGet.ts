/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogDto } from "../acroStack/services/dtos/cms/BlogDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogGetPathId = string;

/**
 * @type object
 */
export type BlogGetStatus200Plain = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogGetStatus200Json = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogGetStatus200Json2 = AcroStackServicesDtosCmsBlogDto;

export type BlogGetStatus200 = BlogGetStatus200Plain | BlogGetStatus200Json | BlogGetStatus200Json2;

/**
 * @type object
 */
export type BlogGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetStatus400 = BlogGetStatus400Plain | BlogGetStatus400Json | BlogGetStatus400Json2;

/**
 * @type object
 */
export type BlogGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetStatus401 = BlogGetStatus401Plain | BlogGetStatus401Json | BlogGetStatus401Json2;

/**
 * @type object
 */
export type BlogGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetStatus403 = BlogGetStatus403Plain | BlogGetStatus403Json | BlogGetStatus403Json2;

/**
 * @type object
 */
export type BlogGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetStatus404 = BlogGetStatus404Plain | BlogGetStatus404Json | BlogGetStatus404Json2;

/**
 * @type object
 */
export type BlogGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetStatus500 = BlogGetStatus500Plain | BlogGetStatus500Json | BlogGetStatus500Json2;

/**
 * @type object
 */
export type BlogGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetStatus501 = BlogGetStatus501Plain | BlogGetStatus501Json | BlogGetStatus501Json2;

/**
 * @type object
 */
export type BlogGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/blog/${string}`;
};

/**
 * @type object
 */
export type BlogGetResponses = {
  "200": BlogGetStatus200;
  "400": BlogGetStatus400;
  "401": BlogGetStatus401;
  "403": BlogGetStatus403;
  "404": BlogGetStatus404;
  "500": BlogGetStatus500;
  "501": BlogGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogGetResponse =
  | BlogGetStatus200
  | BlogGetStatus400
  | BlogGetStatus401
  | BlogGetStatus403
  | BlogGetStatus404
  | BlogGetStatus500
  | BlogGetStatus501;
