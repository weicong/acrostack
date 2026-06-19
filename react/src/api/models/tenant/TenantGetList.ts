/* oxlint-disable */

import type { VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10400CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/pagedResultDto1Volo/abp/tenantManagement/tenantDtoVolo/abp/tenantManagement/application/ContractsVersion10400CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type TenantGetListQueryFilter = string | undefined;

/**
 * @type string | undefined
 */
export type TenantGetListQuerySorting = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TenantGetListQuerySkipCount = number | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type TenantGetListQueryMaxResultCount = number | undefined;

/**
 * @type object
 */
export type TenantGetListStatus200Plain =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TenantGetListStatus200Json =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type TenantGetListStatus200Json2 =
  VoloAbpApplicationDtosPagedResultDto1VoloAbpTenantManagementTenantDtoVoloAbpTenantManagementApplicationContractsVersion10400CultureneutralPublicKeyTokennull;

export type TenantGetListStatus200 =
  | TenantGetListStatus200Plain
  | TenantGetListStatus200Json
  | TenantGetListStatus200Json2;

/**
 * @type object
 */
export type TenantGetListStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus400 =
  | TenantGetListStatus400Plain
  | TenantGetListStatus400Json
  | TenantGetListStatus400Json2;

/**
 * @type object
 */
export type TenantGetListStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus401 =
  | TenantGetListStatus401Plain
  | TenantGetListStatus401Json
  | TenantGetListStatus401Json2;

/**
 * @type object
 */
export type TenantGetListStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus403 =
  | TenantGetListStatus403Plain
  | TenantGetListStatus403Json
  | TenantGetListStatus403Json2;

/**
 * @type object
 */
export type TenantGetListStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus404 =
  | TenantGetListStatus404Plain
  | TenantGetListStatus404Json
  | TenantGetListStatus404Json2;

/**
 * @type object
 */
export type TenantGetListStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus500 =
  | TenantGetListStatus500Plain
  | TenantGetListStatus500Json
  | TenantGetListStatus500Json2;

/**
 * @type object
 */
export type TenantGetListStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetListStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetListStatus501 =
  | TenantGetListStatus501Plain
  | TenantGetListStatus501Json
  | TenantGetListStatus501Json2;

/**
 * @type object
 */
export type TenantGetListRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: TenantGetListQueryFilter;
    Sorting?: TenantGetListQuerySorting;
    SkipCount?: TenantGetListQuerySkipCount;
    MaxResultCount?: TenantGetListQueryMaxResultCount;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/multi-tenancy/tenants";
};

/**
 * @type object
 */
export type TenantGetListResponses = {
  "200": TenantGetListStatus200;
  "400": TenantGetListStatus400;
  "401": TenantGetListStatus401;
  "403": TenantGetListStatus403;
  "404": TenantGetListStatus404;
  "500": TenantGetListStatus500;
  "501": TenantGetListStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantGetListResponse =
  | TenantGetListStatus200
  | TenantGetListStatus400
  | TenantGetListStatus401
  | TenantGetListStatus403
  | TenantGetListStatus404
  | TenantGetListStatus500
  | TenantGetListStatus501;
