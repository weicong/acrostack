/* oxlint-disable */

import type { AcroStackBooksBookType } from "../acroStack/books/BookType.ts";
import type { VoloAbpApplicationDtosPagedResultDto1AcroStackBooksBookDtoAcroStackBooksVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/books/bookDtoAcroStack/BooksVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type BookGetListQueryFilter = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BookGetListQueryType = AcroStackBooksBookType | undefined;

/**
 * @type string | undefined
 */
export type BookGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BookGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type BookGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type BookGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackBooksBookDtoAcroStackBooksVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BookGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackBooksBookDtoAcroStackBooksVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type BookGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackBooksBookDtoAcroStackBooksVersion1000CultureneutralPublicKeyTokennull;

export type BookGetListStatus200 =
  | BookGetListStatus200Plain
  | BookGetListStatus200Json
  | BookGetListStatus200Json2;

/**
 * @type object
 */
export type BookGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus400 =
  | BookGetListStatus400Plain
  | BookGetListStatus400Json
  | BookGetListStatus400Json2;

/**
 * @type object
 */
export type BookGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus401 =
  | BookGetListStatus401Plain
  | BookGetListStatus401Json
  | BookGetListStatus401Json2;

/**
 * @type object
 */
export type BookGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus403 =
  | BookGetListStatus403Plain
  | BookGetListStatus403Json
  | BookGetListStatus403Json2;

/**
 * @type object
 */
export type BookGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus404 =
  | BookGetListStatus404Plain
  | BookGetListStatus404Json
  | BookGetListStatus404Json2;

/**
 * @type object
 */
export type BookGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus500 =
  | BookGetListStatus500Plain
  | BookGetListStatus500Json
  | BookGetListStatus500Json2;

/**
 * @type object
 */
export type BookGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookGetListStatus501 =
  | BookGetListStatus501Plain
  | BookGetListStatus501Json
  | BookGetListStatus501Json2;

/**
 * @type object
 */
export type BookGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: BookGetListQueryFilter;
    Type?: BookGetListQueryType;
    Sorting?: BookGetListQuerySorting;
    SkipCount?: BookGetListQuerySkipCount;
    MaxResultCount?: BookGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/book";
};

/**
 * @type object
 */
export type BookGetListResponses = {
  "200": BookGetListStatus200;
  "400": BookGetListStatus400;
  "401": BookGetListStatus401;
  "403": BookGetListStatus403;
  "404": BookGetListStatus404;
  "500": BookGetListStatus500;
  "501": BookGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BookGetListResponse =
  | BookGetListStatus200
  | BookGetListStatus400
  | BookGetListStatus401
  | BookGetListStatus403
  | BookGetListStatus404
  | BookGetListStatus500
  | BookGetListStatus501;
