/* oxlint-disable */

import type { AcroStackServicesDtosBooksBookDto } from "../acroStack/services/dtos/books/BookDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BookGetPathId = string;

/**
 * @type object
 */
export type BookGetStatus200Plain = AcroStackServicesDtosBooksBookDto;

/**
 * @type object
 */
export type BookGetStatus200Json = AcroStackServicesDtosBooksBookDto;

/**
 * @type object
 */
export type BookGetStatus200Json2 = AcroStackServicesDtosBooksBookDto;

export type BookGetStatus200 = BookGetStatus200Plain | BookGetStatus200Json | BookGetStatus200Json2;

/**
 * @type object
 */
export type BookGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus400 = BookGetStatus400Plain | BookGetStatus400Json | BookGetStatus400Json2;

/**
 * @type object
 */
export type BookGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus401 = BookGetStatus401Plain | BookGetStatus401Json | BookGetStatus401Json2;

/**
 * @type object
 */
export type BookGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus403 = BookGetStatus403Plain | BookGetStatus403Json | BookGetStatus403Json2;

/**
 * @type object
 */
export type BookGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus404 = BookGetStatus404Plain | BookGetStatus404Json | BookGetStatus404Json2;

/**
 * @type object
 */
export type BookGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus500 = BookGetStatus500Plain | BookGetStatus500Json | BookGetStatus500Json2;

/**
 * @type object
 */
export type BookGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetStatus501 = BookGetStatus501Plain | BookGetStatus501Json | BookGetStatus501Json2;

/**
 * @type object
 */
export type BookGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BookGetPathId;
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
export type BookGetResponses = {
  "200": BookGetStatus200;
  "400": BookGetStatus400;
  "401": BookGetStatus401;
  "403": BookGetStatus403;
  "404": BookGetStatus404;
  "500": BookGetStatus500;
  "501": BookGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BookGetResponse =
  | BookGetStatus200
  | BookGetStatus400
  | BookGetStatus401
  | BookGetStatus403
  | BookGetStatus404
  | BookGetStatus500
  | BookGetStatus501;
