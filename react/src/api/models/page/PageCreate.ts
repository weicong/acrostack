/* oxlint-disable */

import type { AcroStackServicesDtosCmsCreatePageInput } from "../acroStack/services/dtos/cms/CreatePageInput.ts";
import type { AcroStackServicesDtosCmsPageDto } from "../acroStack/services/dtos/cms/PageDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type PageCreateStatus200Plain = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageCreateStatus200Json = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageCreateStatus200Json2 = AcroStackServicesDtosCmsPageDto;

export type PageCreateStatus200 =
  | PageCreateStatus200Plain
  | PageCreateStatus200Json
  | PageCreateStatus200Json2;

/**
 * @type object
 */
export type PageCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageCreateStatus400 =
  | PageCreateStatus400Plain
  | PageCreateStatus400Json
  | PageCreateStatus400Json2;

/**
 * @type object
 */
export type PageCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageCreateStatus401 =
  | PageCreateStatus401Plain
  | PageCreateStatus401Json
  | PageCreateStatus401Json2;

/**
 * @type object
 */
export type PageCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageCreateStatus403 =
  | PageCreateStatus403Plain
  | PageCreateStatus403Json
  | PageCreateStatus403Json2;

/**
 * @type object
 */
export type PageCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageCreateStatus404 =
  | PageCreateStatus404Plain
  | PageCreateStatus404Json
  | PageCreateStatus404Json2;

/**
 * @type object
 */
export type PageCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageCreateStatus500 =
  | PageCreateStatus500Plain
  | PageCreateStatus500Json
  | PageCreateStatus500Json2;

/**
 * @type object
 */
export type PageCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageCreateStatus501 =
  | PageCreateStatus501Plain
  | PageCreateStatus501Json
  | PageCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type PageCreateJsonData = AcroStackServicesDtosCmsCreatePageInput | undefined;

/**
 * @type object | undefined
 */
export type PageCreateJson2Data = AcroStackServicesDtosCmsCreatePageInput | undefined;

/**
 * @type object | undefined
 */
export type PageCreateJson3Data = AcroStackServicesDtosCmsCreatePageInput | undefined;

export type PageCreateData = PageCreateJsonData | PageCreateJson2Data | PageCreateJson3Data;

/**
 * @type object
 */
export type PageCreateRequestConfig = {
  data?: PageCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/page";
};

/**
 * @type object
 */
export type PageCreateResponses = {
  "200": PageCreateStatus200;
  "400": PageCreateStatus400;
  "401": PageCreateStatus401;
  "403": PageCreateStatus403;
  "404": PageCreateStatus404;
  "500": PageCreateStatus500;
  "501": PageCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageCreateResponse =
  | PageCreateStatus200
  | PageCreateStatus400
  | PageCreateStatus401
  | PageCreateStatus403
  | PageCreateStatus404
  | PageCreateStatus500
  | PageCreateStatus501;
