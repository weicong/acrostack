/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantDeleteDefaultConnectionStringPathId = string;

/**
 * @type any
 */
export type TenantDeleteDefaultConnectionStringStatus200 = any;

/**
 * @type any
 */
export type TenantDeleteDefaultConnectionStringStatus204 = any;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus400 =
  | TenantDeleteDefaultConnectionStringStatus400Plain
  | TenantDeleteDefaultConnectionStringStatus400Json
  | TenantDeleteDefaultConnectionStringStatus400Json2;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus401 =
  | TenantDeleteDefaultConnectionStringStatus401Plain
  | TenantDeleteDefaultConnectionStringStatus401Json
  | TenantDeleteDefaultConnectionStringStatus401Json2;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus403 =
  | TenantDeleteDefaultConnectionStringStatus403Plain
  | TenantDeleteDefaultConnectionStringStatus403Json
  | TenantDeleteDefaultConnectionStringStatus403Json2;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus404 =
  | TenantDeleteDefaultConnectionStringStatus404Plain
  | TenantDeleteDefaultConnectionStringStatus404Json
  | TenantDeleteDefaultConnectionStringStatus404Json2;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus500 =
  | TenantDeleteDefaultConnectionStringStatus500Plain
  | TenantDeleteDefaultConnectionStringStatus500Json
  | TenantDeleteDefaultConnectionStringStatus500Json2;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteDefaultConnectionStringStatus501 =
  | TenantDeleteDefaultConnectionStringStatus501Plain
  | TenantDeleteDefaultConnectionStringStatus501Json
  | TenantDeleteDefaultConnectionStringStatus501Json2;

/**
 * @type object
 */
export type TenantDeleteDefaultConnectionStringRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TenantDeleteDefaultConnectionStringPathId;
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
export type TenantDeleteDefaultConnectionStringResponses = {
  "200": TenantDeleteDefaultConnectionStringStatus200;
  "204": TenantDeleteDefaultConnectionStringStatus204;
  "400": TenantDeleteDefaultConnectionStringStatus400;
  "401": TenantDeleteDefaultConnectionStringStatus401;
  "403": TenantDeleteDefaultConnectionStringStatus403;
  "404": TenantDeleteDefaultConnectionStringStatus404;
  "500": TenantDeleteDefaultConnectionStringStatus500;
  "501": TenantDeleteDefaultConnectionStringStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantDeleteDefaultConnectionStringResponse =
  | TenantDeleteDefaultConnectionStringStatus200
  | TenantDeleteDefaultConnectionStringStatus204
  | TenantDeleteDefaultConnectionStringStatus400
  | TenantDeleteDefaultConnectionStringStatus401
  | TenantDeleteDefaultConnectionStringStatus403
  | TenantDeleteDefaultConnectionStringStatus404
  | TenantDeleteDefaultConnectionStringStatus500
  | TenantDeleteDefaultConnectionStringStatus501;
