/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpTenantManagementTenantCreateDto } from "../volo/abp/tenantManagement/TenantCreateDto.ts";
import type { VoloAbpTenantManagementTenantDto } from "../volo/abp/tenantManagement/TenantDto.ts";

/**
 * @type object
 */
export type TenantCreateStatus200Plain = VoloAbpTenantManagementTenantDto;

/**
 * @type object
 */
export type TenantCreateStatus200Json = VoloAbpTenantManagementTenantDto;

/**
 * @type object
 */
export type TenantCreateStatus200Json2 = VoloAbpTenantManagementTenantDto;

export type TenantCreateStatus200 =
  | TenantCreateStatus200Plain
  | TenantCreateStatus200Json
  | TenantCreateStatus200Json2;

/**
 * @type object
 */
export type TenantCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus400 =
  | TenantCreateStatus400Plain
  | TenantCreateStatus400Json
  | TenantCreateStatus400Json2;

/**
 * @type object
 */
export type TenantCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus401 =
  | TenantCreateStatus401Plain
  | TenantCreateStatus401Json
  | TenantCreateStatus401Json2;

/**
 * @type object
 */
export type TenantCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus403 =
  | TenantCreateStatus403Plain
  | TenantCreateStatus403Json
  | TenantCreateStatus403Json2;

/**
 * @type object
 */
export type TenantCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus404 =
  | TenantCreateStatus404Plain
  | TenantCreateStatus404Json
  | TenantCreateStatus404Json2;

/**
 * @type object
 */
export type TenantCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus500 =
  | TenantCreateStatus500Plain
  | TenantCreateStatus500Json
  | TenantCreateStatus500Json2;

/**
 * @type object
 */
export type TenantCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantCreateStatus501 =
  | TenantCreateStatus501Plain
  | TenantCreateStatus501Json
  | TenantCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type TenantCreateJsonData =
  | Omit<NonNullable<VoloAbpTenantManagementTenantCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TenantCreateJson2Data =
  | Omit<NonNullable<VoloAbpTenantManagementTenantCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TenantCreateJson3Data =
  | Omit<NonNullable<VoloAbpTenantManagementTenantCreateDto>, "extraProperties">
  | undefined;

export type TenantCreateData = TenantCreateJsonData | TenantCreateJson2Data | TenantCreateJson3Data;

/**
 * @type object
 */
export type TenantCreateRequestConfig = {
  data?: TenantCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/multi-tenancy/tenants";
};

/**
 * @type object
 */
export type TenantCreateResponses = {
  "200": TenantCreateStatus200;
  "400": TenantCreateStatus400;
  "401": TenantCreateStatus401;
  "403": TenantCreateStatus403;
  "404": TenantCreateStatus404;
  "500": TenantCreateStatus500;
  "501": TenantCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantCreateResponse =
  | TenantCreateStatus200
  | TenantCreateStatus400
  | TenantCreateStatus401
  | TenantCreateStatus403
  | TenantCreateStatus404
  | TenantCreateStatus500
  | TenantCreateStatus501;
