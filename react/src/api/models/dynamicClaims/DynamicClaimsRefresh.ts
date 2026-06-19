/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type any
 */
export type DynamicClaimsRefreshStatus200 = any;

/**
 * @type any
 */
export type DynamicClaimsRefreshStatus204 = any;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus400 =
  | DynamicClaimsRefreshStatus400Plain
  | DynamicClaimsRefreshStatus400Json
  | DynamicClaimsRefreshStatus400Json2;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus401 =
  | DynamicClaimsRefreshStatus401Plain
  | DynamicClaimsRefreshStatus401Json
  | DynamicClaimsRefreshStatus401Json2;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus403 =
  | DynamicClaimsRefreshStatus403Plain
  | DynamicClaimsRefreshStatus403Json
  | DynamicClaimsRefreshStatus403Json2;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus404 =
  | DynamicClaimsRefreshStatus404Plain
  | DynamicClaimsRefreshStatus404Json
  | DynamicClaimsRefreshStatus404Json2;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus500 =
  | DynamicClaimsRefreshStatus500Plain
  | DynamicClaimsRefreshStatus500Json
  | DynamicClaimsRefreshStatus500Json2;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type DynamicClaimsRefreshStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type DynamicClaimsRefreshStatus501 =
  | DynamicClaimsRefreshStatus501Plain
  | DynamicClaimsRefreshStatus501Json
  | DynamicClaimsRefreshStatus501Json2;

/**
 * @type object
 */
export type DynamicClaimsRefreshRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/dynamic-claims/refresh";
};

/**
 * @type object
 */
export type DynamicClaimsRefreshResponses = {
  "200": DynamicClaimsRefreshStatus200;
  "204": DynamicClaimsRefreshStatus204;
  "400": DynamicClaimsRefreshStatus400;
  "401": DynamicClaimsRefreshStatus401;
  "403": DynamicClaimsRefreshStatus403;
  "404": DynamicClaimsRefreshStatus404;
  "500": DynamicClaimsRefreshStatus500;
  "501": DynamicClaimsRefreshStatus501;
};

/**
 * @description Union of all possible responses
 */
export type DynamicClaimsRefreshResponse =
  | DynamicClaimsRefreshStatus200
  | DynamicClaimsRefreshStatus204
  | DynamicClaimsRefreshStatus400
  | DynamicClaimsRefreshStatus401
  | DynamicClaimsRefreshStatus403
  | DynamicClaimsRefreshStatus404
  | DynamicClaimsRefreshStatus500
  | DynamicClaimsRefreshStatus501;
