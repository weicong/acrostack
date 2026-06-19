/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserDeletePathId = string;

/**
 * @type any
 */
export type UserDeleteStatus200 = any;

/**
 * @type any
 */
export type UserDeleteStatus204 = any;

/**
 * @type object
 */
export type UserDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus400 =
  | UserDeleteStatus400Plain
  | UserDeleteStatus400Json
  | UserDeleteStatus400Json2;

/**
 * @type object
 */
export type UserDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus401 =
  | UserDeleteStatus401Plain
  | UserDeleteStatus401Json
  | UserDeleteStatus401Json2;

/**
 * @type object
 */
export type UserDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus403 =
  | UserDeleteStatus403Plain
  | UserDeleteStatus403Json
  | UserDeleteStatus403Json2;

/**
 * @type object
 */
export type UserDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus404 =
  | UserDeleteStatus404Plain
  | UserDeleteStatus404Json
  | UserDeleteStatus404Json2;

/**
 * @type object
 */
export type UserDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus500 =
  | UserDeleteStatus500Plain
  | UserDeleteStatus500Json
  | UserDeleteStatus500Json2;

/**
 * @type object
 */
export type UserDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserDeleteStatus501 =
  | UserDeleteStatus501Plain
  | UserDeleteStatus501Json
  | UserDeleteStatus501Json2;

/**
 * @type object
 */
export type UserDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: UserDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/${string}`;
};

/**
 * @type object
 */
export type UserDeleteResponses = {
  "200": UserDeleteStatus200;
  "204": UserDeleteStatus204;
  "400": UserDeleteStatus400;
  "401": UserDeleteStatus401;
  "403": UserDeleteStatus403;
  "404": UserDeleteStatus404;
  "500": UserDeleteStatus500;
  "501": UserDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserDeleteResponse =
  | UserDeleteStatus200
  | UserDeleteStatus204
  | UserDeleteStatus400
  | UserDeleteStatus401
  | UserDeleteStatus403
  | UserDeleteStatus404
  | UserDeleteStatus500
  | UserDeleteStatus501;
