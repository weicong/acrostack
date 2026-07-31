/* oxlint-disable */

import type { AcroStackServicesDtosCmsCreatePageInput } from "../acroStack/services/dtos/cms/CreatePageInput.ts";
import type { AcroStackServicesDtosCmsPageDto } from "../acroStack/services/dtos/cms/PageDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageUpdatePathId = string;

/**
 * @type object
 */
export type PageUpdateStatus200Plain = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageUpdateStatus200Json = AcroStackServicesDtosCmsPageDto;

/**
 * @type object
 */
export type PageUpdateStatus200Json2 = AcroStackServicesDtosCmsPageDto;

export type PageUpdateStatus200 =
  | PageUpdateStatus200Plain
  | PageUpdateStatus200Json
  | PageUpdateStatus200Json2;

/**
 * @type object
 */
export type PageUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageUpdateStatus400 =
  | PageUpdateStatus400Plain
  | PageUpdateStatus400Json
  | PageUpdateStatus400Json2;

/**
 * @type object
 */
export type PageUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageUpdateStatus401 =
  | PageUpdateStatus401Plain
  | PageUpdateStatus401Json
  | PageUpdateStatus401Json2;

/**
 * @type object
 */
export type PageUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageUpdateStatus403 =
  | PageUpdateStatus403Plain
  | PageUpdateStatus403Json
  | PageUpdateStatus403Json2;

/**
 * @type object
 */
export type PageUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageUpdateStatus404 =
  | PageUpdateStatus404Plain
  | PageUpdateStatus404Json
  | PageUpdateStatus404Json2;

/**
 * @type object
 */
export type PageUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageUpdateStatus500 =
  | PageUpdateStatus500Plain
  | PageUpdateStatus500Json
  | PageUpdateStatus500Json2;

/**
 * @type object
 */
export type PageUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageUpdateStatus501 =
  | PageUpdateStatus501Plain
  | PageUpdateStatus501Json
  | PageUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type PageUpdateJsonData = AcroStackServicesDtosCmsCreatePageInput | undefined;

/**
 * @type object | undefined
 */
export type PageUpdateJson2Data = AcroStackServicesDtosCmsCreatePageInput | undefined;

/**
 * @type object | undefined
 */
export type PageUpdateJson3Data = AcroStackServicesDtosCmsCreatePageInput | undefined;

export type PageUpdateData = PageUpdateJsonData | PageUpdateJson2Data | PageUpdateJson3Data;

/**
 * @type object
 */
export type PageUpdateRequestConfig = {
  data?: PageUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: PageUpdatePathId;
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
export type PageUpdateResponses = {
  "200": PageUpdateStatus200;
  "400": PageUpdateStatus400;
  "401": PageUpdateStatus401;
  "403": PageUpdateStatus403;
  "404": PageUpdateStatus404;
  "500": PageUpdateStatus500;
  "501": PageUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageUpdateResponse =
  | PageUpdateStatus200
  | PageUpdateStatus400
  | PageUpdateStatus401
  | PageUpdateStatus403
  | PageUpdateStatus404
  | PageUpdateStatus500
  | PageUpdateStatus501;
