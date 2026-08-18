/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/openIddictManagement/openIddictScopeDtoAcroStack/OpenIddictManagementVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type OpenIddictScopeGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type OpenIddictScopeGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type OpenIddictScopeGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type OpenIddictScopeGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackOpenIddictManagementOpenIddictScopeDtoAcroStackOpenIddictManagementVersion1000CultureneutralPublicKeyTokennull;

export type OpenIddictScopeGetListStatus200 =
  | OpenIddictScopeGetListStatus200Plain
  | OpenIddictScopeGetListStatus200Json
  | OpenIddictScopeGetListStatus200Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus400 =
  | OpenIddictScopeGetListStatus400Plain
  | OpenIddictScopeGetListStatus400Json
  | OpenIddictScopeGetListStatus400Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus401 =
  | OpenIddictScopeGetListStatus401Plain
  | OpenIddictScopeGetListStatus401Json
  | OpenIddictScopeGetListStatus401Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus403 =
  | OpenIddictScopeGetListStatus403Plain
  | OpenIddictScopeGetListStatus403Json
  | OpenIddictScopeGetListStatus403Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus404 =
  | OpenIddictScopeGetListStatus404Plain
  | OpenIddictScopeGetListStatus404Json
  | OpenIddictScopeGetListStatus404Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus500 =
  | OpenIddictScopeGetListStatus500Plain
  | OpenIddictScopeGetListStatus500Json
  | OpenIddictScopeGetListStatus500Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeGetListStatus501 =
  | OpenIddictScopeGetListStatus501Plain
  | OpenIddictScopeGetListStatus501Json
  | OpenIddictScopeGetListStatus501Json2;

/**
 * @type object
 */
export type OpenIddictScopeGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: OpenIddictScopeGetListQueryFilter;
    Sorting?: OpenIddictScopeGetListQuerySorting;
    SkipCount?: OpenIddictScopeGetListQuerySkipCount;
    MaxResultCount?: OpenIddictScopeGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/open-iddict-scope";
};

/**
 * @type object
 */
export type OpenIddictScopeGetListResponses = {
  "200": OpenIddictScopeGetListStatus200;
  "400": OpenIddictScopeGetListStatus400;
  "401": OpenIddictScopeGetListStatus401;
  "403": OpenIddictScopeGetListStatus403;
  "404": OpenIddictScopeGetListStatus404;
  "500": OpenIddictScopeGetListStatus500;
  "501": OpenIddictScopeGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeGetListResponse =
  | OpenIddictScopeGetListStatus200
  | OpenIddictScopeGetListStatus400
  | OpenIddictScopeGetListStatus401
  | OpenIddictScopeGetListStatus403
  | OpenIddictScopeGetListStatus404
  | OpenIddictScopeGetListStatus500
  | OpenIddictScopeGetListStatus501;
