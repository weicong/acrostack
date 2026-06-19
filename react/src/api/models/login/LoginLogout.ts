/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type any
 */
export type LoginLogoutStatus200 = any;

/**
 * @type any
 */
export type LoginLogoutStatus204 = any;

/**
 * @type object
 */
export type LoginLogoutStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus400 =
  | LoginLogoutStatus400Plain
  | LoginLogoutStatus400Json
  | LoginLogoutStatus400Json2;

/**
 * @type object
 */
export type LoginLogoutStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus401 =
  | LoginLogoutStatus401Plain
  | LoginLogoutStatus401Json
  | LoginLogoutStatus401Json2;

/**
 * @type object
 */
export type LoginLogoutStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus403 =
  | LoginLogoutStatus403Plain
  | LoginLogoutStatus403Json
  | LoginLogoutStatus403Json2;

/**
 * @type object
 */
export type LoginLogoutStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus404 =
  | LoginLogoutStatus404Plain
  | LoginLogoutStatus404Json
  | LoginLogoutStatus404Json2;

/**
 * @type object
 */
export type LoginLogoutStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus500 =
  | LoginLogoutStatus500Plain
  | LoginLogoutStatus500Json
  | LoginLogoutStatus500Json2;

/**
 * @type object
 */
export type LoginLogoutStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type LoginLogoutStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type LoginLogoutStatus501 =
  | LoginLogoutStatus501Plain
  | LoginLogoutStatus501Json
  | LoginLogoutStatus501Json2;

/**
 * @type object
 */
export type LoginLogoutRequestConfig = {
  data?: never;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/account/logout";
};

/**
 * @type object
 */
export type LoginLogoutResponses = {
  "200": LoginLogoutStatus200;
  "204": LoginLogoutStatus204;
  "400": LoginLogoutStatus400;
  "401": LoginLogoutStatus401;
  "403": LoginLogoutStatus403;
  "404": LoginLogoutStatus404;
  "500": LoginLogoutStatus500;
  "501": LoginLogoutStatus501;
};

/**
 * @description Union of all possible responses
 */
export type LoginLogoutResponse =
  | LoginLogoutStatus200
  | LoginLogoutStatus204
  | LoginLogoutStatus400
  | LoginLogoutStatus401
  | LoginLogoutStatus403
  | LoginLogoutStatus404
  | LoginLogoutStatus500
  | LoginLogoutStatus501;
