/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogDto } from "../acroStack/services/dtos/cms/BlogDto.ts";
import type { AcroStackServicesDtosCmsCreateBlogInput } from "../acroStack/services/dtos/cms/CreateBlogInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type BlogCreateStatus200Plain = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogCreateStatus200Json = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogCreateStatus200Json2 = AcroStackServicesDtosCmsBlogDto;

export type BlogCreateStatus200 =
  | BlogCreateStatus200Plain
  | BlogCreateStatus200Json
  | BlogCreateStatus200Json2;

/**
 * @type object
 */
export type BlogCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogCreateStatus400 =
  | BlogCreateStatus400Plain
  | BlogCreateStatus400Json
  | BlogCreateStatus400Json2;

/**
 * @type object
 */
export type BlogCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogCreateStatus401 =
  | BlogCreateStatus401Plain
  | BlogCreateStatus401Json
  | BlogCreateStatus401Json2;

/**
 * @type object
 */
export type BlogCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogCreateStatus403 =
  | BlogCreateStatus403Plain
  | BlogCreateStatus403Json
  | BlogCreateStatus403Json2;

/**
 * @type object
 */
export type BlogCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogCreateStatus404 =
  | BlogCreateStatus404Plain
  | BlogCreateStatus404Json
  | BlogCreateStatus404Json2;

/**
 * @type object
 */
export type BlogCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogCreateStatus500 =
  | BlogCreateStatus500Plain
  | BlogCreateStatus500Json
  | BlogCreateStatus500Json2;

/**
 * @type object
 */
export type BlogCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogCreateStatus501 =
  | BlogCreateStatus501Plain
  | BlogCreateStatus501Json
  | BlogCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogCreateJsonData = AcroStackServicesDtosCmsCreateBlogInput | undefined;

/**
 * @type object | undefined
 */
export type BlogCreateJson2Data = AcroStackServicesDtosCmsCreateBlogInput | undefined;

/**
 * @type object | undefined
 */
export type BlogCreateJson3Data = AcroStackServicesDtosCmsCreateBlogInput | undefined;

export type BlogCreateData = BlogCreateJsonData | BlogCreateJson2Data | BlogCreateJson3Data;

/**
 * @type object
 */
export type BlogCreateRequestConfig = {
  data?: BlogCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/blog";
};

/**
 * @type object
 */
export type BlogCreateResponses = {
  "200": BlogCreateStatus200;
  "400": BlogCreateStatus400;
  "401": BlogCreateStatus401;
  "403": BlogCreateStatus403;
  "404": BlogCreateStatus404;
  "500": BlogCreateStatus500;
  "501": BlogCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogCreateResponse =
  | BlogCreateStatus200
  | BlogCreateStatus400
  | BlogCreateStatus401
  | BlogCreateStatus403
  | BlogCreateStatus404
  | BlogCreateStatus500
  | BlogCreateStatus501;
