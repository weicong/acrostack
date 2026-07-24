/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type OpenIddictScopeDeletePathId = string;

/**
 * @type any
 */
export type OpenIddictScopeDeleteStatus200 = any;

/**
 * @type any
 */
export type OpenIddictScopeDeleteStatus204 = any;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus400 =
  | OpenIddictScopeDeleteStatus400Plain
  | OpenIddictScopeDeleteStatus400Json
  | OpenIddictScopeDeleteStatus400Json2;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus401 =
  | OpenIddictScopeDeleteStatus401Plain
  | OpenIddictScopeDeleteStatus401Json
  | OpenIddictScopeDeleteStatus401Json2;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus403 =
  | OpenIddictScopeDeleteStatus403Plain
  | OpenIddictScopeDeleteStatus403Json
  | OpenIddictScopeDeleteStatus403Json2;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus404 =
  | OpenIddictScopeDeleteStatus404Plain
  | OpenIddictScopeDeleteStatus404Json
  | OpenIddictScopeDeleteStatus404Json2;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus500 =
  | OpenIddictScopeDeleteStatus500Plain
  | OpenIddictScopeDeleteStatus500Json
  | OpenIddictScopeDeleteStatus500Json2;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictScopeDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictScopeDeleteStatus501 =
  | OpenIddictScopeDeleteStatus501Plain
  | OpenIddictScopeDeleteStatus501Json
  | OpenIddictScopeDeleteStatus501Json2;

/**
 * @type object
 */
export type OpenIddictScopeDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: OpenIddictScopeDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/open-iddict-scope/${string}`;
};

/**
 * @type object
 */
export type OpenIddictScopeDeleteResponses = {
  "200": OpenIddictScopeDeleteStatus200;
  "204": OpenIddictScopeDeleteStatus204;
  "400": OpenIddictScopeDeleteStatus400;
  "401": OpenIddictScopeDeleteStatus401;
  "403": OpenIddictScopeDeleteStatus403;
  "404": OpenIddictScopeDeleteStatus404;
  "500": OpenIddictScopeDeleteStatus500;
  "501": OpenIddictScopeDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictScopeDeleteResponse =
  | OpenIddictScopeDeleteStatus200
  | OpenIddictScopeDeleteStatus204
  | OpenIddictScopeDeleteStatus400
  | OpenIddictScopeDeleteStatus401
  | OpenIddictScopeDeleteStatus403
  | OpenIddictScopeDeleteStatus404
  | OpenIddictScopeDeleteStatus500
  | OpenIddictScopeDeleteStatus501;
