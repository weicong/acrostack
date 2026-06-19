/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type UserLookupGetCountQueryFilter = string | undefined;

/**
 * @description
 * Format: `int64`
 * @type integer
 */
export type UserLookupGetCountStatus200Plain = bigint;

/**
 * @description
 * Format: `int64`
 * @type integer
 */
export type UserLookupGetCountStatus200Json = bigint;

/**
 * @description
 * Format: `int64`
 * @type integer
 */
export type UserLookupGetCountStatus200Json2 = bigint;

export type UserLookupGetCountStatus200 =
  | UserLookupGetCountStatus200Plain
  | UserLookupGetCountStatus200Json
  | UserLookupGetCountStatus200Json2;

/**
 * @type object
 */
export type UserLookupGetCountStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus400 =
  | UserLookupGetCountStatus400Plain
  | UserLookupGetCountStatus400Json
  | UserLookupGetCountStatus400Json2;

/**
 * @type object
 */
export type UserLookupGetCountStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus401 =
  | UserLookupGetCountStatus401Plain
  | UserLookupGetCountStatus401Json
  | UserLookupGetCountStatus401Json2;

/**
 * @type object
 */
export type UserLookupGetCountStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus403 =
  | UserLookupGetCountStatus403Plain
  | UserLookupGetCountStatus403Json
  | UserLookupGetCountStatus403Json2;

/**
 * @type object
 */
export type UserLookupGetCountStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus404 =
  | UserLookupGetCountStatus404Plain
  | UserLookupGetCountStatus404Json
  | UserLookupGetCountStatus404Json2;

/**
 * @type object
 */
export type UserLookupGetCountStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus500 =
  | UserLookupGetCountStatus500Plain
  | UserLookupGetCountStatus500Json
  | UserLookupGetCountStatus500Json2;

/**
 * @type object
 */
export type UserLookupGetCountStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserLookupGetCountStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserLookupGetCountStatus501 =
  | UserLookupGetCountStatus501Plain
  | UserLookupGetCountStatus501Json
  | UserLookupGetCountStatus501Json2;

/**
 * @type object
 */
export type UserLookupGetCountRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    Filter?: UserLookupGetCountQueryFilter;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/users/lookup/count";
};

/**
 * @type object
 */
export type UserLookupGetCountResponses = {
  "200": UserLookupGetCountStatus200;
  "400": UserLookupGetCountStatus400;
  "401": UserLookupGetCountStatus401;
  "403": UserLookupGetCountStatus403;
  "404": UserLookupGetCountStatus404;
  "500": UserLookupGetCountStatus500;
  "501": UserLookupGetCountStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserLookupGetCountResponse =
  | UserLookupGetCountStatus200
  | UserLookupGetCountStatus400
  | UserLookupGetCountStatus401
  | UserLookupGetCountStatus403
  | UserLookupGetCountStatus404
  | UserLookupGetCountStatus500
  | UserLookupGetCountStatus501;
