/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1AcroStackAppUsersAppUserDtoAcroStackAppUsersVersion1000CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1AcroStack/appUsers/appUserDtoAcroStack/AppUsersVersion1000CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type AppUserGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type AppUserGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AppUserGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type AppUserGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type AppUserGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1AcroStackAppUsersAppUserDtoAcroStackAppUsersVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type AppUserGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1AcroStackAppUsersAppUserDtoAcroStackAppUsersVersion1000CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type AppUserGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1AcroStackAppUsersAppUserDtoAcroStackAppUsersVersion1000CultureneutralPublicKeyTokennull;

export type AppUserGetListStatus200 =
  | AppUserGetListStatus200Plain
  | AppUserGetListStatus200Json
  | AppUserGetListStatus200Json2;

/**
 * @type object
 */
export type AppUserGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus400 =
  | AppUserGetListStatus400Plain
  | AppUserGetListStatus400Json
  | AppUserGetListStatus400Json2;

/**
 * @type object
 */
export type AppUserGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus401 =
  | AppUserGetListStatus401Plain
  | AppUserGetListStatus401Json
  | AppUserGetListStatus401Json2;

/**
 * @type object
 */
export type AppUserGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus403 =
  | AppUserGetListStatus403Plain
  | AppUserGetListStatus403Json
  | AppUserGetListStatus403Json2;

/**
 * @type object
 */
export type AppUserGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus404 =
  | AppUserGetListStatus404Plain
  | AppUserGetListStatus404Json
  | AppUserGetListStatus404Json2;

/**
 * @type object
 */
export type AppUserGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus500 =
  | AppUserGetListStatus500Plain
  | AppUserGetListStatus500Json
  | AppUserGetListStatus500Json2;

/**
 * @type object
 */
export type AppUserGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserGetListStatus501 =
  | AppUserGetListStatus501Plain
  | AppUserGetListStatus501Json
  | AppUserGetListStatus501Json2;

/**
 * @type object
 */
export type AppUserGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: AppUserGetListQueryFilter;
    Sorting?: AppUserGetListQuerySorting;
    SkipCount?: AppUserGetListQuerySkipCount;
    MaxResultCount?: AppUserGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/app/app-user";
};

/**
 * @type object
 */
export type AppUserGetListResponses = {
  "200": AppUserGetListStatus200;
  "400": AppUserGetListStatus400;
  "401": AppUserGetListStatus401;
  "403": AppUserGetListStatus403;
  "404": AppUserGetListStatus404;
  "500": AppUserGetListStatus500;
  "501": AppUserGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AppUserGetListResponse =
  | AppUserGetListStatus200
  | AppUserGetListStatus400
  | AppUserGetListStatus401
  | AppUserGetListStatus403
  | AppUserGetListStatus404
  | AppUserGetListStatus500
  | AppUserGetListStatus501;
