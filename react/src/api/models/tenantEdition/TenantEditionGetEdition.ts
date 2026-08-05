/* oxlint-disable */

import type { AcroStackServicesDtosSaaSEditionDto } from "../acroStack/services/dtos/saaS/EditionDto.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantEditionGetEditionPathTenantId = string;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus200Plain = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus200Json = AcroStackServicesDtosSaaSEditionDto;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus200Json2 = AcroStackServicesDtosSaaSEditionDto;

export type TenantEditionGetEditionStatus200 =
  | TenantEditionGetEditionStatus200Plain
  | TenantEditionGetEditionStatus200Json
  | TenantEditionGetEditionStatus200Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetEditionStatus400 =
  | TenantEditionGetEditionStatus400Plain
  | TenantEditionGetEditionStatus400Json
  | TenantEditionGetEditionStatus400Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetEditionStatus401 =
  | TenantEditionGetEditionStatus401Plain
  | TenantEditionGetEditionStatus401Json
  | TenantEditionGetEditionStatus401Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetEditionStatus403 =
  | TenantEditionGetEditionStatus403Plain
  | TenantEditionGetEditionStatus403Json
  | TenantEditionGetEditionStatus403Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetEditionStatus404 =
  | TenantEditionGetEditionStatus404Plain
  | TenantEditionGetEditionStatus404Json
  | TenantEditionGetEditionStatus404Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetEditionStatus500 =
  | TenantEditionGetEditionStatus500Plain
  | TenantEditionGetEditionStatus500Json
  | TenantEditionGetEditionStatus500Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantEditionGetEditionStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantEditionGetEditionStatus501 =
  | TenantEditionGetEditionStatus501Plain
  | TenantEditionGetEditionStatus501Json
  | TenantEditionGetEditionStatus501Json2;

/**
 * @type object
 */
export type TenantEditionGetEditionRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    tenantId: TenantEditionGetEditionPathTenantId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/tenant-edition/edition/${string}`;
};

/**
 * @type object
 */
export type TenantEditionGetEditionResponses = {
  "200": TenantEditionGetEditionStatus200;
  "400": TenantEditionGetEditionStatus400;
  "401": TenantEditionGetEditionStatus401;
  "403": TenantEditionGetEditionStatus403;
  "404": TenantEditionGetEditionStatus404;
  "500": TenantEditionGetEditionStatus500;
  "501": TenantEditionGetEditionStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantEditionGetEditionResponse =
  | TenantEditionGetEditionStatus200
  | TenantEditionGetEditionStatus400
  | TenantEditionGetEditionStatus401
  | TenantEditionGetEditionStatus403
  | TenantEditionGetEditionStatus404
  | TenantEditionGetEditionStatus500
  | TenantEditionGetEditionStatus501;
