/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsTagDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/cms/TagDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type TagGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type TagGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TagGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TagGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type TagGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsTagDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TagGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsTagDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TagGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosCmsTagDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type TagGetListStatus200 =
  | TagGetListStatus200Plain
  | TagGetListStatus200Json
  | TagGetListStatus200Json2;

/**
 * @type object
 */
export type TagGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagGetListStatus400 =
  | TagGetListStatus400Plain
  | TagGetListStatus400Json
  | TagGetListStatus400Json2;

/**
 * @type object
 */
export type TagGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagGetListStatus401 =
  | TagGetListStatus401Plain
  | TagGetListStatus401Json
  | TagGetListStatus401Json2;

/**
 * @type object
 */
export type TagGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagGetListStatus403 =
  | TagGetListStatus403Plain
  | TagGetListStatus403Json
  | TagGetListStatus403Json2;

/**
 * @type object
 */
export type TagGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagGetListStatus404 =
  | TagGetListStatus404Plain
  | TagGetListStatus404Json
  | TagGetListStatus404Json2;

/**
 * @type object
 */
export type TagGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagGetListStatus500 =
  | TagGetListStatus500Plain
  | TagGetListStatus500Json
  | TagGetListStatus500Json2;

/**
 * @type object
 */
export type TagGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagGetListStatus501 =
  | TagGetListStatus501Plain
  | TagGetListStatus501Json
  | TagGetListStatus501Json2;

/**
 * @type object
 */
export type TagGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: TagGetListQueryFilter;
    Sorting?: TagGetListQuerySorting;
    SkipCount?: TagGetListQuerySkipCount;
    MaxResultCount?: TagGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/tag";
};

/**
 * @type object
 */
export type TagGetListResponses = {
  "200": TagGetListStatus200;
  "400": TagGetListStatus400;
  "401": TagGetListStatus401;
  "403": TagGetListStatus403;
  "404": TagGetListStatus404;
  "500": TagGetListStatus500;
  "501": TagGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagGetListResponse =
  | TagGetListStatus200
  | TagGetListStatus400
  | TagGetListStatus401
  | TagGetListStatus403
  | TagGetListStatus404
  | TagGetListStatus500
  | TagGetListStatus501;
