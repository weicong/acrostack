/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type RoleDeletePathId = string;

/**
 * @type any
 */
export type RoleDeleteStatus200 = any;

/**
 * @type any
 */
export type RoleDeleteStatus204 = any;

/**
 * @type object
 */
export type RoleDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus400 =
  | RoleDeleteStatus400Plain
  | RoleDeleteStatus400Json
  | RoleDeleteStatus400Json2;

/**
 * @type object
 */
export type RoleDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus401 =
  | RoleDeleteStatus401Plain
  | RoleDeleteStatus401Json
  | RoleDeleteStatus401Json2;

/**
 * @type object
 */
export type RoleDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus403 =
  | RoleDeleteStatus403Plain
  | RoleDeleteStatus403Json
  | RoleDeleteStatus403Json2;

/**
 * @type object
 */
export type RoleDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus404 =
  | RoleDeleteStatus404Plain
  | RoleDeleteStatus404Json
  | RoleDeleteStatus404Json2;

/**
 * @type object
 */
export type RoleDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus500 =
  | RoleDeleteStatus500Plain
  | RoleDeleteStatus500Json
  | RoleDeleteStatus500Json2;

/**
 * @type object
 */
export type RoleDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleDeleteStatus501 =
  | RoleDeleteStatus501Plain
  | RoleDeleteStatus501Json
  | RoleDeleteStatus501Json2;

/**
 * @type object
 */
export type RoleDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: RoleDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/roles/${string}`;
};

/**
 * @type object
 */
export type RoleDeleteResponses = {
  "200": RoleDeleteStatus200;
  "204": RoleDeleteStatus204;
  "400": RoleDeleteStatus400;
  "401": RoleDeleteStatus401;
  "403": RoleDeleteStatus403;
  "404": RoleDeleteStatus404;
  "500": RoleDeleteStatus500;
  "501": RoleDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RoleDeleteResponse =
  | RoleDeleteStatus200
  | RoleDeleteStatus204
  | RoleDeleteStatus400
  | RoleDeleteStatus401
  | RoleDeleteStatus403
  | RoleDeleteStatus404
  | RoleDeleteStatus500
  | RoleDeleteStatus501;
