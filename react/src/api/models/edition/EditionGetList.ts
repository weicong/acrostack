/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/services/dtos/saaS/EditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type EditionGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type EditionGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type EditionGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type EditionGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type EditionGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type EditionGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type EditionGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackServicesDtosSaaSEditionDtoAcroStackVersion1000CultureneutralPublicKeyTokennull;

export type EditionGetListStatus200 =
  | EditionGetListStatus200Plain
  | EditionGetListStatus200Json
  | EditionGetListStatus200Json2;

/**
 * @type object
 */
export type EditionGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetListStatus400 =
  | EditionGetListStatus400Plain
  | EditionGetListStatus400Json
  | EditionGetListStatus400Json2;

/**
 * @type object
 */
export type EditionGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetListStatus401 =
  | EditionGetListStatus401Plain
  | EditionGetListStatus401Json
  | EditionGetListStatus401Json2;

/**
 * @type object
 */
export type EditionGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetListStatus403 =
  | EditionGetListStatus403Plain
  | EditionGetListStatus403Json
  | EditionGetListStatus403Json2;

/**
 * @type object
 */
export type EditionGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetListStatus404 =
  | EditionGetListStatus404Plain
  | EditionGetListStatus404Json
  | EditionGetListStatus404Json2;

/**
 * @type object
 */
export type EditionGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetListStatus500 =
  | EditionGetListStatus500Plain
  | EditionGetListStatus500Json
  | EditionGetListStatus500Json2;

/**
 * @type object
 */
export type EditionGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type EditionGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type EditionGetListStatus501 =
  | EditionGetListStatus501Plain
  | EditionGetListStatus501Json
  | EditionGetListStatus501Json2;

/**
 * @type object
 */
export type EditionGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: EditionGetListQueryFilter;
    Sorting?: EditionGetListQuerySorting;
    SkipCount?: EditionGetListQuerySkipCount;
    MaxResultCount?: EditionGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/edition";
};

/**
 * @type object
 */
export type EditionGetListResponses = {
  "200": EditionGetListStatus200;
  "400": EditionGetListStatus400;
  "401": EditionGetListStatus401;
  "403": EditionGetListStatus403;
  "404": EditionGetListStatus404;
  "500": EditionGetListStatus500;
  "501": EditionGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type EditionGetListResponse =
  | EditionGetListStatus200
  | EditionGetListStatus400
  | EditionGetListStatus401
  | EditionGetListStatus403
  | EditionGetListStatus404
  | EditionGetListStatus500
  | EditionGetListStatus501;
