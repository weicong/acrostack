/* oxlint-disable */

import type { AcroStackServicesDtosBooksBookDto } from "../acroStack/services/dtos/books/BookDto.ts";
import type { AcroStackServicesDtosBooksCreateUpdateBookDto } from "../acroStack/services/dtos/books/CreateUpdateBookDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type object
 */
export type BookCreateStatus200Plain = AcroStackServicesDtosBooksBookDto;

/**
 * @type object
 */
export type BookCreateStatus200Json = AcroStackServicesDtosBooksBookDto;

/**
 * @type object
 */
export type BookCreateStatus200Json2 = AcroStackServicesDtosBooksBookDto;

export type BookCreateStatus200 =
  | BookCreateStatus200Plain
  | BookCreateStatus200Json
  | BookCreateStatus200Json2;

/**
 * @type object
 */
export type BookCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus400 =
  | BookCreateStatus400Plain
  | BookCreateStatus400Json
  | BookCreateStatus400Json2;

/**
 * @type object
 */
export type BookCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus401 =
  | BookCreateStatus401Plain
  | BookCreateStatus401Json
  | BookCreateStatus401Json2;

/**
 * @type object
 */
export type BookCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus403 =
  | BookCreateStatus403Plain
  | BookCreateStatus403Json
  | BookCreateStatus403Json2;

/**
 * @type object
 */
export type BookCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus404 =
  | BookCreateStatus404Plain
  | BookCreateStatus404Json
  | BookCreateStatus404Json2;

/**
 * @type object
 */
export type BookCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus500 =
  | BookCreateStatus500Plain
  | BookCreateStatus500Json
  | BookCreateStatus500Json2;

/**
 * @type object
 */
export type BookCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookCreateStatus501 =
  | BookCreateStatus501Plain
  | BookCreateStatus501Json
  | BookCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type BookCreateJsonData = AcroStackServicesDtosBooksCreateUpdateBookDto | undefined;

/**
 * @type object | undefined
 */
export type BookCreateJson2Data = AcroStackServicesDtosBooksCreateUpdateBookDto | undefined;

/**
 * @type object | undefined
 */
export type BookCreateJson3Data = AcroStackServicesDtosBooksCreateUpdateBookDto | undefined;

export type BookCreateData = BookCreateJsonData | BookCreateJson2Data | BookCreateJson3Data;

/**
 * @type object
 */
export type BookCreateRequestConfig = {
  data?: BookCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/book";
};

/**
 * @type object
 */
export type BookCreateResponses = {
  "200": BookCreateStatus200;
  "400": BookCreateStatus400;
  "401": BookCreateStatus401;
  "403": BookCreateStatus403;
  "404": BookCreateStatus404;
  "500": BookCreateStatus500;
  "501": BookCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BookCreateResponse =
  | BookCreateStatus200
  | BookCreateStatus400
  | BookCreateStatus401
  | BookCreateStatus403
  | BookCreateStatus404
  | BookCreateStatus500
  | BookCreateStatus501;
