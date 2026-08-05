/* oxlint-disable */

import type { RoleGetListExtraProperties } from "../RoleGetListExtraProperties.ts";
import type { VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/abp/identity/identityUserDtoVolo/abp/identity/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type UserGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type UserGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type UserGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type UserGetListQueryMaxResultCount = number | undefined;

export type UserGetListQueryExtraProperties = RoleGetListExtraProperties | undefined;

/**
 * @type object
 */
export type UserGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpIdentityIdentityUserDtoVoloAbpIdentityApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type UserGetListStatus200 =
  | UserGetListStatus200Plain
  | UserGetListStatus200Json
  | UserGetListStatus200Json2;

/**
 * @type object
 */
export type UserGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus400 =
  | UserGetListStatus400Plain
  | UserGetListStatus400Json
  | UserGetListStatus400Json2;

/**
 * @type object
 */
export type UserGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus401 =
  | UserGetListStatus401Plain
  | UserGetListStatus401Json
  | UserGetListStatus401Json2;

/**
 * @type object
 */
export type UserGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus403 =
  | UserGetListStatus403Plain
  | UserGetListStatus403Json
  | UserGetListStatus403Json2;

/**
 * @type object
 */
export type UserGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus404 =
  | UserGetListStatus404Plain
  | UserGetListStatus404Json
  | UserGetListStatus404Json2;

/**
 * @type object
 */
export type UserGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus500 =
  | UserGetListStatus500Plain
  | UserGetListStatus500Json
  | UserGetListStatus500Json2;

/**
 * @type object
 */
export type UserGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetListStatus501 =
  | UserGetListStatus501Plain
  | UserGetListStatus501Json
  | UserGetListStatus501Json2;

/**
 * @type object
 */
export type UserGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: UserGetListQueryFilter;
    Sorting?: UserGetListQuerySorting;
    SkipCount?: UserGetListQuerySkipCount;
    MaxResultCount?: UserGetListQueryMaxResultCount;
    ExtraProperties?: UserGetListQueryExtraProperties;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/users";
};

/**
 * @type object
 */
export type UserGetListResponses = {
  "200": UserGetListStatus200;
  "400": UserGetListStatus400;
  "401": UserGetListStatus401;
  "403": UserGetListStatus403;
  "404": UserGetListStatus404;
  "500": UserGetListStatus500;
  "501": UserGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserGetListResponse =
  | UserGetListStatus200
  | UserGetListStatus400
  | UserGetListStatus401
  | UserGetListStatus403
  | UserGetListStatus404
  | UserGetListStatus500
  | UserGetListStatus501;
