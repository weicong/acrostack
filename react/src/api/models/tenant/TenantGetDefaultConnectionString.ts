/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantGetDefaultConnectionStringPathId = string;

/**
 * @type string
 */
export type TenantGetDefaultConnectionStringStatus200Plain = string;

/**
 * @type string
 */
export type TenantGetDefaultConnectionStringStatus200Json = string;

/**
 * @type string
 */
export type TenantGetDefaultConnectionStringStatus200Json2 = string;

export type TenantGetDefaultConnectionStringStatus200 =
  | TenantGetDefaultConnectionStringStatus200Plain
  | TenantGetDefaultConnectionStringStatus200Json
  | TenantGetDefaultConnectionStringStatus200Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus400 =
  | TenantGetDefaultConnectionStringStatus400Plain
  | TenantGetDefaultConnectionStringStatus400Json
  | TenantGetDefaultConnectionStringStatus400Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus401 =
  | TenantGetDefaultConnectionStringStatus401Plain
  | TenantGetDefaultConnectionStringStatus401Json
  | TenantGetDefaultConnectionStringStatus401Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus403 =
  | TenantGetDefaultConnectionStringStatus403Plain
  | TenantGetDefaultConnectionStringStatus403Json
  | TenantGetDefaultConnectionStringStatus403Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus404 =
  | TenantGetDefaultConnectionStringStatus404Plain
  | TenantGetDefaultConnectionStringStatus404Json
  | TenantGetDefaultConnectionStringStatus404Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus500 =
  | TenantGetDefaultConnectionStringStatus500Plain
  | TenantGetDefaultConnectionStringStatus500Json
  | TenantGetDefaultConnectionStringStatus500Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantGetDefaultConnectionStringStatus501 =
  | TenantGetDefaultConnectionStringStatus501Plain
  | TenantGetDefaultConnectionStringStatus501Json
  | TenantGetDefaultConnectionStringStatus501Json2;

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TenantGetDefaultConnectionStringPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/multi-tenancy/tenants/${string}/default-connection-string`;
};

/**
 * @type object
 */
export type TenantGetDefaultConnectionStringResponses = {
  "200": TenantGetDefaultConnectionStringStatus200;
  "400": TenantGetDefaultConnectionStringStatus400;
  "401": TenantGetDefaultConnectionStringStatus401;
  "403": TenantGetDefaultConnectionStringStatus403;
  "404": TenantGetDefaultConnectionStringStatus404;
  "500": TenantGetDefaultConnectionStringStatus500;
  "501": TenantGetDefaultConnectionStringStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantGetDefaultConnectionStringResponse =
  | TenantGetDefaultConnectionStringStatus200
  | TenantGetDefaultConnectionStringStatus400
  | TenantGetDefaultConnectionStringStatus401
  | TenantGetDefaultConnectionStringStatus403
  | TenantGetDefaultConnectionStringStatus404
  | TenantGetDefaultConnectionStringStatus500
  | TenantGetDefaultConnectionStringStatus501;
