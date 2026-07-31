/* oxlint-disable */

import type { AcroStackServicesDtosCmsPageDto } from "../acroStack/services/dtos/cms/PageDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageGetPathId = string;

/**
 * @type object
 */
export type PageGetStatus200Plain = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageGetStatus200Json = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageGetStatus200Json2 = AcroStackServicesDtosCmsPageDto;

export type PageGetStatus200 = PageGetStatus200Plain | PageGetStatus200Json | PageGetStatus200Json2;

/**
 * @type object
 */
export type PageGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetStatus400 = PageGetStatus400Plain | PageGetStatus400Json | PageGetStatus400Json2;

/**
 * @type object
 */
export type PageGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetStatus401 = PageGetStatus401Plain | PageGetStatus401Json | PageGetStatus401Json2;

/**
 * @type object
 */
export type PageGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetStatus403 = PageGetStatus403Plain | PageGetStatus403Json | PageGetStatus403Json2;

/**
 * @type object
 */
export type PageGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetStatus404 = PageGetStatus404Plain | PageGetStatus404Json | PageGetStatus404Json2;

/**
 * @type object
 */
export type PageGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetStatus500 = PageGetStatus500Plain | PageGetStatus500Json | PageGetStatus500Json2;

/**
 * @type object
 */
export type PageGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetStatus501 = PageGetStatus501Plain | PageGetStatus501Json | PageGetStatus501Json2;

/**
 * @type object
 */
export type PageGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: PageGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/page/${string}`;
};

/**
 * @type object
 */
export type PageGetResponses = {
  "200": PageGetStatus200;
  "400": PageGetStatus400;
  "401": PageGetStatus401;
  "403": PageGetStatus403;
  "404": PageGetStatus404;
  "500": PageGetStatus500;
  "501": PageGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageGetResponse =
  | PageGetStatus200
  | PageGetStatus400
  | PageGetStatus401
  | PageGetStatus403
  | PageGetStatus404
  | PageGetStatus500
  | PageGetStatus501;
