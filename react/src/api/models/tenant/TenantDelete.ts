/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TenantDeletePathId = string;

/**
 * @type any
 */
export type TenantDeleteStatus200 = any;

/**
 * @type any
 */
export type TenantDeleteStatus204 = any;

/**
 * @type object
 */
export type TenantDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus400 =
  | TenantDeleteStatus400Plain
  | TenantDeleteStatus400Json
  | TenantDeleteStatus400Json2;

/**
 * @type object
 */
export type TenantDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus401 =
  | TenantDeleteStatus401Plain
  | TenantDeleteStatus401Json
  | TenantDeleteStatus401Json2;

/**
 * @type object
 */
export type TenantDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus403 =
  | TenantDeleteStatus403Plain
  | TenantDeleteStatus403Json
  | TenantDeleteStatus403Json2;

/**
 * @type object
 */
export type TenantDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus404 =
  | TenantDeleteStatus404Plain
  | TenantDeleteStatus404Json
  | TenantDeleteStatus404Json2;

/**
 * @type object
 */
export type TenantDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus500 =
  | TenantDeleteStatus500Plain
  | TenantDeleteStatus500Json
  | TenantDeleteStatus500Json2;

/**
 * @type object
 */
export type TenantDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TenantDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TenantDeleteStatus501 =
  | TenantDeleteStatus501Plain
  | TenantDeleteStatus501Json
  | TenantDeleteStatus501Json2;

/**
 * @type object
 */
export type TenantDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TenantDeletePathId;
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
export type TenantDeleteResponses = {
  "200": TenantDeleteStatus200;
  "204": TenantDeleteStatus204;
  "400": TenantDeleteStatus400;
  "401": TenantDeleteStatus401;
  "403": TenantDeleteStatus403;
  "404": TenantDeleteStatus404;
  "500": TenantDeleteStatus500;
  "501": TenantDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TenantDeleteResponse =
  | TenantDeleteStatus200
  | TenantDeleteStatus204
  | TenantDeleteStatus400
  | TenantDeleteStatus401
  | TenantDeleteStatus403
  | TenantDeleteStatus404
  | TenantDeleteStatus500
  | TenantDeleteStatus501;
