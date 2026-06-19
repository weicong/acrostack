/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantUpdateDefaultConnectionStringPathId = string;

/**
 * @type string | undefined
 */
export type TenantUpdateDefaultConnectionStringQueryDefaultConnectionString = string | undefined;

/**
 * @type any
 */
export type TenantUpdateDefaultConnectionStringStatus200 = any;

/**
 * @type any
 */
export type TenantUpdateDefaultConnectionStringStatus204 = any;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus400 =
  | TenantUpdateDefaultConnectionStringStatus400Plain
  | TenantUpdateDefaultConnectionStringStatus400Json
  | TenantUpdateDefaultConnectionStringStatus400Json2;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus401 =
  | TenantUpdateDefaultConnectionStringStatus401Plain
  | TenantUpdateDefaultConnectionStringStatus401Json
  | TenantUpdateDefaultConnectionStringStatus401Json2;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus403 =
  | TenantUpdateDefaultConnectionStringStatus403Plain
  | TenantUpdateDefaultConnectionStringStatus403Json
  | TenantUpdateDefaultConnectionStringStatus403Json2;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus404 =
  | TenantUpdateDefaultConnectionStringStatus404Plain
  | TenantUpdateDefaultConnectionStringStatus404Json
  | TenantUpdateDefaultConnectionStringStatus404Json2;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus500 =
  | TenantUpdateDefaultConnectionStringStatus500Plain
  | TenantUpdateDefaultConnectionStringStatus500Json
  | TenantUpdateDefaultConnectionStringStatus500Json2;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type TenantUpdateDefaultConnectionStringStatus501 =
  | TenantUpdateDefaultConnectionStringStatus501Plain
  | TenantUpdateDefaultConnectionStringStatus501Json
  | TenantUpdateDefaultConnectionStringStatus501Json2;

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TenantUpdateDefaultConnectionStringPathId;
  };
  /**
   * @type object | undefined
   */
  queryParams?: {
    defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/multi-tenancy/tenants/${string}/default-connection-string`;
};

/**
 * @type object
 */
export type TenantUpdateDefaultConnectionStringResponses = {
  "200": TenantUpdateDefaultConnectionStringStatus200;
  "204": TenantUpdateDefaultConnectionStringStatus204;
  "400": TenantUpdateDefaultConnectionStringStatus400;
  "401": TenantUpdateDefaultConnectionStringStatus401;
  "403": TenantUpdateDefaultConnectionStringStatus403;
  "404": TenantUpdateDefaultConnectionStringStatus404;
  "500": TenantUpdateDefaultConnectionStringStatus500;
  "501": TenantUpdateDefaultConnectionStringStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantUpdateDefaultConnectionStringResponse =
  | TenantUpdateDefaultConnectionStringStatus200
  | TenantUpdateDefaultConnectionStringStatus204
  | TenantUpdateDefaultConnectionStringStatus400
  | TenantUpdateDefaultConnectionStringStatus401
  | TenantUpdateDefaultConnectionStringStatus403
  | TenantUpdateDefaultConnectionStringStatus404
  | TenantUpdateDefaultConnectionStringStatus500
  | TenantUpdateDefaultConnectionStringStatus501;
