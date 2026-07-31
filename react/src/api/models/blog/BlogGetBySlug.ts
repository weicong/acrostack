/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogDto } from "../acroStack/services/dtos/cms/BlogDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type BlogGetBySlugQuerySlug = string | undefined;

/**
 * @type object
 */
export type BlogGetBySlugStatus200Plain = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogGetBySlugStatus200Json = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogGetBySlugStatus200Json2 = AcroStackServicesDtosCmsBlogDto;

export type BlogGetBySlugStatus200 =
  | BlogGetBySlugStatus200Plain
  | BlogGetBySlugStatus200Json
  | BlogGetBySlugStatus200Json2;

/**
 * @type object
 */
export type BlogGetBySlugStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetBySlugStatus400 =
  | BlogGetBySlugStatus400Plain
  | BlogGetBySlugStatus400Json
  | BlogGetBySlugStatus400Json2;

/**
 * @type object
 */
export type BlogGetBySlugStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetBySlugStatus401 =
  | BlogGetBySlugStatus401Plain
  | BlogGetBySlugStatus401Json
  | BlogGetBySlugStatus401Json2;

/**
 * @type object
 */
export type BlogGetBySlugStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetBySlugStatus403 =
  | BlogGetBySlugStatus403Plain
  | BlogGetBySlugStatus403Json
  | BlogGetBySlugStatus403Json2;

/**
 * @type object
 */
export type BlogGetBySlugStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetBySlugStatus404 =
  | BlogGetBySlugStatus404Plain
  | BlogGetBySlugStatus404Json
  | BlogGetBySlugStatus404Json2;

/**
 * @type object
 */
export type BlogGetBySlugStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetBySlugStatus500 =
  | BlogGetBySlugStatus500Plain
  | BlogGetBySlugStatus500Json
  | BlogGetBySlugStatus500Json2;

/**
 * @type object
 */
export type BlogGetBySlugStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogGetBySlugStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogGetBySlugStatus501 =
  | BlogGetBySlugStatus501Plain
  | BlogGetBySlugStatus501Json
  | BlogGetBySlugStatus501Json2;

/**
 * @type object
 */
export type BlogGetBySlugRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    slug?: BlogGetBySlugQuerySlug;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/blog/by-slug";
};

/**
 * @type object
 */
export type BlogGetBySlugResponses = {
  "200": BlogGetBySlugStatus200;
  "400": BlogGetBySlugStatus400;
  "401": BlogGetBySlugStatus401;
  "403": BlogGetBySlugStatus403;
  "404": BlogGetBySlugStatus404;
  "500": BlogGetBySlugStatus500;
  "501": BlogGetBySlugStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogGetBySlugResponse =
  | BlogGetBySlugStatus200
  | BlogGetBySlugStatus400
  | BlogGetBySlugStatus401
  | BlogGetBySlugStatus403
  | BlogGetBySlugStatus404
  | BlogGetBySlugStatus500
  | BlogGetBySlugStatus501;
