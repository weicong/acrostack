/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsPageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/cms/PageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type PageGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type PageGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type PageGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type PageGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type PageGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsPageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type PageGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsPageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type PageGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsPageDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type PageGetListStatus200 =
  | PageGetListStatus200Plain
  | PageGetListStatus200Json
  | PageGetListStatus200Json2;

/**
 * @type object
 */
export type PageGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetListStatus400 =
  | PageGetListStatus400Plain
  | PageGetListStatus400Json
  | PageGetListStatus400Json2;

/**
 * @type object
 */
export type PageGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetListStatus401 =
  | PageGetListStatus401Plain
  | PageGetListStatus401Json
  | PageGetListStatus401Json2;

/**
 * @type object
 */
export type PageGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetListStatus403 =
  | PageGetListStatus403Plain
  | PageGetListStatus403Json
  | PageGetListStatus403Json2;

/**
 * @type object
 */
export type PageGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetListStatus404 =
  | PageGetListStatus404Plain
  | PageGetListStatus404Json
  | PageGetListStatus404Json2;

/**
 * @type object
 */
export type PageGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetListStatus500 =
  | PageGetListStatus500Plain
  | PageGetListStatus500Json
  | PageGetListStatus500Json2;

/**
 * @type object
 */
export type PageGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageGetListStatus501 =
  | PageGetListStatus501Plain
  | PageGetListStatus501Json
  | PageGetListStatus501Json2;

/**
 * @type object
 */
export type PageGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: PageGetListQueryFilter;
    Sorting?: PageGetListQuerySorting;
    SkipCount?: PageGetListQuerySkipCount;
    MaxResultCount?: PageGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/page";
};

/**
 * @type object
 */
export type PageGetListResponses = {
  "200": PageGetListStatus200;
  "400": PageGetListStatus400;
  "401": PageGetListStatus401;
  "403": PageGetListStatus403;
  "404": PageGetListStatus404;
  "500": PageGetListStatus500;
  "501": PageGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageGetListResponse =
  | PageGetListStatus200
  | PageGetListStatus400
  | PageGetListStatus401
  | PageGetListStatus403
  | PageGetListStatus404
  | PageGetListStatus500
  | PageGetListStatus501;
