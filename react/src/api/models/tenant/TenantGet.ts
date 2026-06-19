/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpTenantManagementTenantDto } from "../volo/abp/tenantManagement/TenantDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantGetPathId = string;

/**
 * @type object
 */
export type TenantGetStatus200Plain = VoloAbpTenantManagementTenantDto;

/**
 * @type object
 */
export type TenantGetStatus200Json = VoloAbpTenantManagementTenantDto;

/**
 * @type object
 */
export type TenantGetStatus200Json2 = VoloAbpTenantManagementTenantDto;

export type TenantGetStatus200 =
  | TenantGetStatus200Plain
  | TenantGetStatus200Json
  | TenantGetStatus200Json2;

/**
 * @type object
 */
export type TenantGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus400 =
  | TenantGetStatus400Plain
  | TenantGetStatus400Json
  | TenantGetStatus400Json2;

/**
 * @type object
 */
export type TenantGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus401 =
  | TenantGetStatus401Plain
  | TenantGetStatus401Json
  | TenantGetStatus401Json2;

/**
 * @type object
 */
export type TenantGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus403 =
  | TenantGetStatus403Plain
  | TenantGetStatus403Json
  | TenantGetStatus403Json2;

/**
 * @type object
 */
export type TenantGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus404 =
  | TenantGetStatus404Plain
  | TenantGetStatus404Json
  | TenantGetStatus404Json2;

/**
 * @type object
 */
export type TenantGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus500 =
  | TenantGetStatus500Plain
  | TenantGetStatus500Json
  | TenantGetStatus500Json2;

/**
 * @type object
 */
export type TenantGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetStatus501 =
  | TenantGetStatus501Plain
  | TenantGetStatus501Json
  | TenantGetStatus501Json2;

/**
 * @type object
 */
export type TenantGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TenantGetPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/multi-tenancy/tenants/${string}`;
};

/**
 * @type object
 */
export type TenantGetResponses = {
  "200": TenantGetStatus200;
  "400": TenantGetStatus400;
  "401": TenantGetStatus401;
  "403": TenantGetStatus403;
  "404": TenantGetStatus404;
  "500": TenantGetStatus500;
  "501": TenantGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantGetResponse =
  | TenantGetStatus200
  | TenantGetStatus400
  | TenantGetStatus401
  | TenantGetStatus403
  | TenantGetStatus404
  | TenantGetStatus500
  | TenantGetStatus501;
