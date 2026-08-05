/* oxlint-disable */

import type { RoleGetListExtraProperties } from "../RoleGetListExtraProperties.ts";
import type { VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/abp/users/userDataVolo/abp/users/AbstractionsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type UserLookupSearchQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type UserLookupSearchQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type UserLookupSearchQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type UserLookupSearchQueryMaxResultCount = number | undefined;

export type UserLookupSearchQueryExtraProperties = RoleGetListExtraProperties | undefined;

/**
 * @type object
 */
export type UserLookupSearchStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserLookupSearchStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserLookupSearchStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloAbpUsersUserDataVoloAbpUsersAbstractionsVersion10600CultureneutralPublicKeyTokennull;

export type UserLookupSearchStatus200 =
  | UserLookupSearchStatus200Plain
  | UserLookupSearchStatus200Json
  | UserLookupSearchStatus200Json2;

/**
 * @type object
 */
export type UserLookupSearchStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus400 =
  | UserLookupSearchStatus400Plain
  | UserLookupSearchStatus400Json
  | UserLookupSearchStatus400Json2;

/**
 * @type object
 */
export type UserLookupSearchStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus401 =
  | UserLookupSearchStatus401Plain
  | UserLookupSearchStatus401Json
  | UserLookupSearchStatus401Json2;

/**
 * @type object
 */
export type UserLookupSearchStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus403 =
  | UserLookupSearchStatus403Plain
  | UserLookupSearchStatus403Json
  | UserLookupSearchStatus403Json2;

/**
 * @type object
 */
export type UserLookupSearchStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus404 =
  | UserLookupSearchStatus404Plain
  | UserLookupSearchStatus404Json
  | UserLookupSearchStatus404Json2;

/**
 * @type object
 */
export type UserLookupSearchStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus500 =
  | UserLookupSearchStatus500Plain
  | UserLookupSearchStatus500Json
  | UserLookupSearchStatus500Json2;

/**
 * @type object
 */
export type UserLookupSearchStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupSearchStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupSearchStatus501 =
  | UserLookupSearchStatus501Plain
  | UserLookupSearchStatus501Json
  | UserLookupSearchStatus501Json2;

/**
 * @type object
 */
export type UserLookupSearchRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: UserLookupSearchQueryFilter;
    Sorting?: UserLookupSearchQuerySorting;
    SkipCount?: UserLookupSearchQuerySkipCount;
    MaxResultCount?: UserLookupSearchQueryMaxResultCount;
    ExtraProperties?: UserLookupSearchQueryExtraProperties;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/users/lookup/search";
};

/**
 * @type object
 */
export type UserLookupSearchResponses = {
  "200": UserLookupSearchStatus200;
  "400": UserLookupSearchStatus400;
  "401": UserLookupSearchStatus401;
  "403": UserLookupSearchStatus403;
  "404": UserLookupSearchStatus404;
  "500": UserLookupSearchStatus500;
  "501": UserLookupSearchStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserLookupSearchResponse =
  | UserLookupSearchStatus200
  | UserLookupSearchStatus400
  | UserLookupSearchStatus401
  | UserLookupSearchStatus403
  | UserLookupSearchStatus404
  | UserLookupSearchStatus500
  | UserLookupSearchStatus501;
