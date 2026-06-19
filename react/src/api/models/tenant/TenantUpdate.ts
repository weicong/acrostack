/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpTenantManagementTenantDto } from "../volo/abp/tenantManagement/TenantDto.ts";
import type { VoloAbpTenantManagementTenantUpdateDto } from "../volo/abp/tenantManagement/TenantUpdateDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantUpdatePathId = string;

/**
 * @type object
 */
export type TenantUpdateStatus200Plain = VoloAbpTenantManagementTenantDto;

/**
 * @type object
 */
export type TenantUpdateStatus200Json = VoloAbpTenantManagementTenantDto;

/**
 * @type object
 */
export type TenantUpdateStatus200Json2 = VoloAbpTenantManagementTenantDto;

export type TenantUpdateStatus200 =
  | TenantUpdateStatus200Plain
  | TenantUpdateStatus200Json
  | TenantUpdateStatus200Json2;

/**
 * @type object
 */
export type TenantUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus400 =
  | TenantUpdateStatus400Plain
  | TenantUpdateStatus400Json
  | TenantUpdateStatus400Json2;

/**
 * @type object
 */
export type TenantUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus401 =
  | TenantUpdateStatus401Plain
  | TenantUpdateStatus401Json
  | TenantUpdateStatus401Json2;

/**
 * @type object
 */
export type TenantUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus403 =
  | TenantUpdateStatus403Plain
  | TenantUpdateStatus403Json
  | TenantUpdateStatus403Json2;

/**
 * @type object
 */
export type TenantUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus404 =
  | TenantUpdateStatus404Plain
  | TenantUpdateStatus404Json
  | TenantUpdateStatus404Json2;

/**
 * @type object
 */
export type TenantUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus500 =
  | TenantUpdateStatus500Plain
  | TenantUpdateStatus500Json
  | TenantUpdateStatus500Json2;

/**
 * @type object
 */
export type TenantUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateStatus501 =
  | TenantUpdateStatus501Plain
  | TenantUpdateStatus501Json
  | TenantUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type TenantUpdateJsonData =
  | Omit<NonNullable<VoloAbpTenantManagementTenantUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TenantUpdateJson2Data =
  | Omit<NonNullable<VoloAbpTenantManagementTenantUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type TenantUpdateJson3Data =
  | Omit<NonNullable<VoloAbpTenantManagementTenantUpdateDto>, "extraProperties">
  | undefined;

export type TenantUpdateData = TenantUpdateJsonData | TenantUpdateJson2Data | TenantUpdateJson3Data;

/**
 * @type object
 */
export type TenantUpdateRequestConfig = {
  data?: TenantUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: TenantUpdatePathId;
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
export type TenantUpdateResponses = {
  "200": TenantUpdateStatus200;
  "400": TenantUpdateStatus400;
  "401": TenantUpdateStatus401;
  "403": TenantUpdateStatus403;
  "404": TenantUpdateStatus404;
  "500": TenantUpdateStatus500;
  "501": TenantUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantUpdateResponse =
  | TenantUpdateStatus200
  | TenantUpdateStatus400
  | TenantUpdateStatus401
  | TenantUpdateStatus403
  | TenantUpdateStatus404
  | TenantUpdateStatus500
  | TenantUpdateStatus501;
