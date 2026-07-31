/* oxlint-disable */

import type { AcroStackServicesDtosCmsBlogDto } from "../acroStack/services/dtos/cms/BlogDto.ts";
import type { AcroStackServicesDtosCmsCreateBlogInput } from "../acroStack/services/dtos/cms/CreateBlogInput.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogUpdatePathId = string;

/**
 * @type object
 */
export type BlogUpdateStatus200Plain = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogUpdateStatus200Json = AcroStackServicesDtosCmsBlogDto;

/**
 * @type object
 */
export type BlogUpdateStatus200Json2 = AcroStackServicesDtosCmsBlogDto;

export type BlogUpdateStatus200 =
  | BlogUpdateStatus200Plain
  | BlogUpdateStatus200Json
  | BlogUpdateStatus200Json2;

/**
 * @type object
 */
export type BlogUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogUpdateStatus400 =
  | BlogUpdateStatus400Plain
  | BlogUpdateStatus400Json
  | BlogUpdateStatus400Json2;

/**
 * @type object
 */
export type BlogUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogUpdateStatus401 =
  | BlogUpdateStatus401Plain
  | BlogUpdateStatus401Json
  | BlogUpdateStatus401Json2;

/**
 * @type object
 */
export type BlogUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogUpdateStatus403 =
  | BlogUpdateStatus403Plain
  | BlogUpdateStatus403Json
  | BlogUpdateStatus403Json2;

/**
 * @type object
 */
export type BlogUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogUpdateStatus404 =
  | BlogUpdateStatus404Plain
  | BlogUpdateStatus404Json
  | BlogUpdateStatus404Json2;

/**
 * @type object
 */
export type BlogUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogUpdateStatus500 =
  | BlogUpdateStatus500Plain
  | BlogUpdateStatus500Json
  | BlogUpdateStatus500Json2;

/**
 * @type object
 */
export type BlogUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogUpdateStatus501 =
  | BlogUpdateStatus501Plain
  | BlogUpdateStatus501Json
  | BlogUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type BlogUpdateJsonData = AcroStackServicesDtosCmsCreateBlogInput | undefined;

/**
 * @type object | undefined
 */
export type BlogUpdateJson2Data = AcroStackServicesDtosCmsCreateBlogInput | undefined;

/**
 * @type object | undefined
 */
export type BlogUpdateJson3Data = AcroStackServicesDtosCmsCreateBlogInput | undefined;

export type BlogUpdateData = BlogUpdateJsonData | BlogUpdateJson2Data | BlogUpdateJson3Data;

/**
 * @type object
 */
export type BlogUpdateRequestConfig = {
  data?: BlogUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: BlogUpdatePathId;
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
export type BlogUpdateResponses = {
  "200": BlogUpdateStatus200;
  "400": BlogUpdateStatus400;
  "401": BlogUpdateStatus401;
  "403": BlogUpdateStatus403;
  "404": BlogUpdateStatus404;
  "500": BlogUpdateStatus500;
  "501": BlogUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogUpdateResponse =
  | BlogUpdateStatus200
  | BlogUpdateStatus400
  | BlogUpdateStatus401
  | BlogUpdateStatus403
  | BlogUpdateStatus404
  | BlogUpdateStatus500
  | BlogUpdateStatus501;
