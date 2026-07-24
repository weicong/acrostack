/* oxlint-disable */

import type { RoleGetListExtraProperties } from "../RoleGetListExtraProperties.ts";
import type { VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type RoleGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type RoleGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type RoleGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type RoleGetListQueryMaxResultCount = number | undefined;

export type RoleGetListQueryExtraProperties = RoleGetListExtraProperties | undefined;

/**
 * @type object
 */
export type RoleGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type RoleGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type RoleGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type RoleGetListStatus200 =
  | RoleGetListStatus200Plain
  | RoleGetListStatus200Json
  | RoleGetListStatus200Json2;

/**
 * @type object
 */
export type RoleGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus400 =
  | RoleGetListStatus400Plain
  | RoleGetListStatus400Json
  | RoleGetListStatus400Json2;

/**
 * @type object
 */
export type RoleGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus401 =
  | RoleGetListStatus401Plain
  | RoleGetListStatus401Json
  | RoleGetListStatus401Json2;

/**
 * @type object
 */
export type RoleGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus403 =
  | RoleGetListStatus403Plain
  | RoleGetListStatus403Json
  | RoleGetListStatus403Json2;

/**
 * @type object
 */
export type RoleGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus404 =
  | RoleGetListStatus404Plain
  | RoleGetListStatus404Json
  | RoleGetListStatus404Json2;

/**
 * @type object
 */
export type RoleGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus500 =
  | RoleGetListStatus500Plain
  | RoleGetListStatus500Json
  | RoleGetListStatus500Json2;

/**
 * @type object
 */
export type RoleGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetListStatus501 =
  | RoleGetListStatus501Plain
  | RoleGetListStatus501Json
  | RoleGetListStatus501Json2;

/**
 * @type object
 */
export type RoleGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: RoleGetListQueryFilter;
    Sorting?: RoleGetListQuerySorting;
    SkipCount?: RoleGetListQuerySkipCount;
    MaxResultCount?: RoleGetListQueryMaxResultCount;
    ExtraProperties?: RoleGetListQueryExtraProperties;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/roles";
};

/**
 * @type object
 */
export type RoleGetListResponses = {
  "200": RoleGetListStatus200;
  "400": RoleGetListStatus400;
  "401": RoleGetListStatus401;
  "403": RoleGetListStatus403;
  "404": RoleGetListStatus404;
  "500": RoleGetListStatus500;
  "501": RoleGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RoleGetListResponse =
  | RoleGetListStatus200
  | RoleGetListStatus400
  | RoleGetListStatus401
  | RoleGetListStatus403
  | RoleGetListStatus404
  | RoleGetListStatus500
  | RoleGetListStatus501;
