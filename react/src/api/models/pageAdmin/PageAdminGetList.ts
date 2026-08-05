/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/cmsKit/admin/pages/pageDtoVolo/cmsKit/admin/application/ContractsVersion10600CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloCmsKitPagesPageStatus } from "../volo/cmsKit/pages/PageStatus.ts";

/**
 * @type string | undefined
 */
export type PageAdminGetListQueryFilter = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type PageAdminGetListQueryStatus = VoloCmsKitPagesPageStatus | undefined;

/**
 * @type string | undefined
 */
export type PageAdminGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type PageAdminGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type PageAdminGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type PageAdminGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type PageAdminGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type PageAdminGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloCmsKitAdminPagesPageDtoVoloCmsKitAdminApplicationContractsVersion10600CultureneutralPublicKeyTokennull;

export type PageAdminGetListStatus200 =
  | PageAdminGetListStatus200Plain
  | PageAdminGetListStatus200Json
  | PageAdminGetListStatus200Json2;

/**
 * @type object
 */
export type PageAdminGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus400 =
  | PageAdminGetListStatus400Plain
  | PageAdminGetListStatus400Json
  | PageAdminGetListStatus400Json2;

/**
 * @type object
 */
export type PageAdminGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus401 =
  | PageAdminGetListStatus401Plain
  | PageAdminGetListStatus401Json
  | PageAdminGetListStatus401Json2;

/**
 * @type object
 */
export type PageAdminGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus403 =
  | PageAdminGetListStatus403Plain
  | PageAdminGetListStatus403Json
  | PageAdminGetListStatus403Json2;

/**
 * @type object
 */
export type PageAdminGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus404 =
  | PageAdminGetListStatus404Plain
  | PageAdminGetListStatus404Json
  | PageAdminGetListStatus404Json2;

/**
 * @type object
 */
export type PageAdminGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus500 =
  | PageAdminGetListStatus500Plain
  | PageAdminGetListStatus500Json
  | PageAdminGetListStatus500Json2;

/**
 * @type object
 */
export type PageAdminGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminGetListStatus501 =
  | PageAdminGetListStatus501Plain
  | PageAdminGetListStatus501Json
  | PageAdminGetListStatus501Json2;

/**
 * @type object
 */
export type PageAdminGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: PageAdminGetListQueryFilter;
    Status?: PageAdminGetListQueryStatus;
    Sorting?: PageAdminGetListQuerySorting;
    SkipCount?: PageAdminGetListQuerySkipCount;
    MaxResultCount?: PageAdminGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/pages";
};

/**
 * @type object
 */
export type PageAdminGetListResponses = {
  "200": PageAdminGetListStatus200;
  "400": PageAdminGetListStatus400;
  "401": PageAdminGetListStatus401;
  "403": PageAdminGetListStatus403;
  "404": PageAdminGetListStatus404;
  "500": PageAdminGetListStatus500;
  "501": PageAdminGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageAdminGetListResponse =
  | PageAdminGetListStatus200
  | PageAdminGetListStatus400
  | PageAdminGetListStatus401
  | PageAdminGetListStatus403
  | PageAdminGetListStatus404
  | PageAdminGetListStatus500
  | PageAdminGetListStatus501;
