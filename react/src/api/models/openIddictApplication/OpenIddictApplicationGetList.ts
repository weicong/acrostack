/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/openIddictManagement/openIddictApplicationDtoAcroStack/OpenIddictManagementVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type OpenIddictApplicationGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type OpenIddictApplicationGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type OpenIddictApplicationGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type OpenIddictApplicationGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictApplicationDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictApplicationGetListStatus200 =
  | OpenIddictApplicationGetListStatus200Plain
  | OpenIddictApplicationGetListStatus200Json
  | OpenIddictApplicationGetListStatus200Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus400 =
  | OpenIddictApplicationGetListStatus400Plain
  | OpenIddictApplicationGetListStatus400Json
  | OpenIddictApplicationGetListStatus400Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus401 =
  | OpenIddictApplicationGetListStatus401Plain
  | OpenIddictApplicationGetListStatus401Json
  | OpenIddictApplicationGetListStatus401Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus403 =
  | OpenIddictApplicationGetListStatus403Plain
  | OpenIddictApplicationGetListStatus403Json
  | OpenIddictApplicationGetListStatus403Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus404 =
  | OpenIddictApplicationGetListStatus404Plain
  | OpenIddictApplicationGetListStatus404Json
  | OpenIddictApplicationGetListStatus404Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus500 =
  | OpenIddictApplicationGetListStatus500Plain
  | OpenIddictApplicationGetListStatus500Json
  | OpenIddictApplicationGetListStatus500Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationGetListStatus501 =
  | OpenIddictApplicationGetListStatus501Plain
  | OpenIddictApplicationGetListStatus501Json
  | OpenIddictApplicationGetListStatus501Json2;

/**
 * @type object
 */
export type OpenIddictApplicationGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: OpenIddictApplicationGetListQueryFilter;
    Sorting?: OpenIddictApplicationGetListQuerySorting;
    SkipCount?: OpenIddictApplicationGetListQuerySkipCount;
    MaxResultCount?: OpenIddictApplicationGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/open-iddict-application";
};

/**
 * @type object
 */
export type OpenIddictApplicationGetListResponses = {
  "200": OpenIddictApplicationGetListStatus200;
  "400": OpenIddictApplicationGetListStatus400;
  "401": OpenIddictApplicationGetListStatus401;
  "403": OpenIddictApplicationGetListStatus403;
  "404": OpenIddictApplicationGetListStatus404;
  "500": OpenIddictApplicationGetListStatus500;
  "501": OpenIddictApplicationGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationGetListResponse =
  | OpenIddictApplicationGetListStatus200
  | OpenIddictApplicationGetListStatus400
  | OpenIddictApplicationGetListStatus401
  | OpenIddictApplicationGetListStatus403
  | OpenIddictApplicationGetListStatus404
  | OpenIddictApplicationGetListStatus500
  | OpenIddictApplicationGetListStatus501;
