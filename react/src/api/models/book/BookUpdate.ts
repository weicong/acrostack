/* oxlint-disable */

import type { AcroStackServicesDtosBooksBookDto } from "../acroStack/services/dtos/books/BookDto.ts";
import type { AcroStackServicesDtosBooksCreateUpdateBookDto } from "../acroStack/services/dtos/books/CreateUpdateBookDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BookUpdatePathId = string;

/**
 * @type object
 */
export type BookUpdateStatus200Plain = AcroStackServicesDtosBooksBookDto;

/**
 * @type object
 */
export type BookUpdateStatus200Json = AcroStackServicesDtosBooksBookDto;

/**
 * @type object
 */
export type BookUpdateStatus200Json2 = AcroStackServicesDtosBooksBookDto;

export type BookUpdateStatus200 =
  | BookUpdateStatus200Plain
  | BookUpdateStatus200Json
  | BookUpdateStatus200Json2;

/**
 * @type object
 */
export type BookUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus400 =
  | BookUpdateStatus400Plain
  | BookUpdateStatus400Json
  | BookUpdateStatus400Json2;

/**
 * @type object
 */
export type BookUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus401 =
  | BookUpdateStatus401Plain
  | BookUpdateStatus401Json
  | BookUpdateStatus401Json2;

/**
 * @type object
 */
export type BookUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus403 =
  | BookUpdateStatus403Plain
  | BookUpdateStatus403Json
  | BookUpdateStatus403Json2;

/**
 * @type object
 */
export type BookUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus404 =
  | BookUpdateStatus404Plain
  | BookUpdateStatus404Json
  | BookUpdateStatus404Json2;

/**
 * @type object
 */
export type BookUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus500 =
  | BookUpdateStatus500Plain
  | BookUpdateStatus500Json
  | BookUpdateStatus500Json2;

/**
 * @type object
 */
export type BookUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookUpdateStatus501 =
  | BookUpdateStatus501Plain
  | BookUpdateStatus501Json
  | BookUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type BookUpdateJsonData = AcroStackServicesDtosBooksCreateUpdateBookDto | undefined;

/**
 * @type object | undefined
 */
export type BookUpdateJson2Data = AcroStackServicesDtosBooksCreateUpdateBookDto | undefined;

/**
 * @type object | undefined
 */
export type BookUpdateJson3Data = AcroStackServicesDtosBooksCreateUpdateBookDto | undefined;

export type BookUpdateData = BookUpdateJsonData | BookUpdateJson2Data | BookUpdateJson3Data;

/**
 * @type object
 */
export type BookUpdateRequestConfig = {
  data?: BookUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: BookUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/book/${string}`;
};

/**
 * @type object
 */
export type BookUpdateResponses = {
  "200": BookUpdateStatus200;
  "400": BookUpdateStatus400;
  "401": BookUpdateStatus401;
  "403": BookUpdateStatus403;
  "404": BookUpdateStatus404;
  "500": BookUpdateStatus500;
  "501": BookUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BookUpdateResponse =
  | BookUpdateStatus200
  | BookUpdateStatus400
  | BookUpdateStatus401
  | BookUpdateStatus403
  | BookUpdateStatus404
  | BookUpdateStatus500
  | BookUpdateStatus501;
