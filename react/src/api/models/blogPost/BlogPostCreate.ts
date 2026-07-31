/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogPostDto } from "../acroStack/services/dtos/cms/BlogPostDto.ts";
import type { AcroStackServicesDtosCmsCreateBlogPostInput } from "../acroStack/services/dtos/cms/CreateBlogPostInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type BlogPostCreateStatus200Plain = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostCreateStatus200Json = AcroStackServicesDtosCmsBlogPostDto;

/**
 * @type object
 */
export type BlogPostCreateStatus200Json2 = AcroStackServicesDtosCmsBlogPostDto;

export type BlogPostCreateStatus200 =
  | BlogPostCreateStatus200Plain
  | BlogPostCreateStatus200Json
  | BlogPostCreateStatus200Json2;

/**
 * @type object
 */
export type BlogPostCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostCreateStatus400 =
  | BlogPostCreateStatus400Plain
  | BlogPostCreateStatus400Json
  | BlogPostCreateStatus400Json2;

/**
 * @type object
 */
export type BlogPostCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostCreateStatus401 =
  | BlogPostCreateStatus401Plain
  | BlogPostCreateStatus401Json
  | BlogPostCreateStatus401Json2;

/**
 * @type object
 */
export type BlogPostCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostCreateStatus403 =
  | BlogPostCreateStatus403Plain
  | BlogPostCreateStatus403Json
  | BlogPostCreateStatus403Json2;

/**
 * @type object
 */
export type BlogPostCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostCreateStatus404 =
  | BlogPostCreateStatus404Plain
  | BlogPostCreateStatus404Json
  | BlogPostCreateStatus404Json2;

/**
 * @type object
 */
export type BlogPostCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostCreateStatus500 =
  | BlogPostCreateStatus500Plain
  | BlogPostCreateStatus500Json
  | BlogPostCreateStatus500Json2;

/**
 * @type object
 */
export type BlogPostCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogPostCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogPostCreateStatus501 =
  | BlogPostCreateStatus501Plain
  | BlogPostCreateStatus501Json
  | BlogPostCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogPostCreateJsonData = AcroStackServicesDtosCmsCreateBlogPostInput | undefined;

/**
 * @type object | undefined
 */
export type BlogPostCreateJson2Data = AcroStackServicesDtosCmsCreateBlogPostInput | undefined;

/**
 * @type object | undefined
 */
export type BlogPostCreateJson3Data = AcroStackServicesDtosCmsCreateBlogPostInput | undefined;

export type BlogPostCreateData =
  | BlogPostCreateJsonData
  | BlogPostCreateJson2Data
  | BlogPostCreateJson3Data;

/**
 * @type object
 */
export type BlogPostCreateRequestConfig = {
  data?: BlogPostCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/blog-post";
};

/**
 * @type object
 */
export type BlogPostCreateResponses = {
  "200": BlogPostCreateStatus200;
  "400": BlogPostCreateStatus400;
  "401": BlogPostCreateStatus401;
  "403": BlogPostCreateStatus403;
  "404": BlogPostCreateStatus404;
  "500": BlogPostCreateStatus500;
  "501": BlogPostCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogPostCreateResponse =
  | BlogPostCreateStatus200
  | BlogPostCreateStatus400
  | BlogPostCreateStatus401
  | BlogPostCreateStatus403
  | BlogPostCreateStatus404
  | BlogPostCreateStatus500
  | BlogPostCreateStatus501;
