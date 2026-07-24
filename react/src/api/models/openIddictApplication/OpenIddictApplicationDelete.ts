/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type OpenIddictApplicationDeletePathId = string;

/**
 * @type any
 */
export type OpenIddictApplicationDeleteStatus200 = any;

/**
 * @type any
 */
export type OpenIddictApplicationDeleteStatus204 = any;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus400 =
  | OpenIddictApplicationDeleteStatus400Plain
  | OpenIddictApplicationDeleteStatus400Json
  | OpenIddictApplicationDeleteStatus400Json2;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus401 =
  | OpenIddictApplicationDeleteStatus401Plain
  | OpenIddictApplicationDeleteStatus401Json
  | OpenIddictApplicationDeleteStatus401Json2;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus403 =
  | OpenIddictApplicationDeleteStatus403Plain
  | OpenIddictApplicationDeleteStatus403Json
  | OpenIddictApplicationDeleteStatus403Json2;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus404 =
  | OpenIddictApplicationDeleteStatus404Plain
  | OpenIddictApplicationDeleteStatus404Json
  | OpenIddictApplicationDeleteStatus404Json2;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus500 =
  | OpenIddictApplicationDeleteStatus500Plain
  | OpenIddictApplicationDeleteStatus500Json
  | OpenIddictApplicationDeleteStatus500Json2;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type OpenIddictApplicationDeleteStatus501 =
  | OpenIddictApplicationDeleteStatus501Plain
  | OpenIddictApplicationDeleteStatus501Json
  | OpenIddictApplicationDeleteStatus501Json2;

/**
 * @type object
 */
export type OpenIddictApplicationDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: OpenIddictApplicationDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/open-iddict-application/${string}`;
};

/**
 * @type object
 */
export type OpenIddictApplicationDeleteResponses = {
  "200": OpenIddictApplicationDeleteStatus200;
  "204": OpenIddictApplicationDeleteStatus204;
  "400": OpenIddictApplicationDeleteStatus400;
  "401": OpenIddictApplicationDeleteStatus401;
  "403": OpenIddictApplicationDeleteStatus403;
  "404": OpenIddictApplicationDeleteStatus404;
  "500": OpenIddictApplicationDeleteStatus500;
  "501": OpenIddictApplicationDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type OpenIddictApplicationDeleteResponse =
  | OpenIddictApplicationDeleteStatus200
  | OpenIddictApplicationDeleteStatus204
  | OpenIddictApplicationDeleteStatus400
  | OpenIddictApplicationDeleteStatus401
  | OpenIddictApplicationDeleteStatus403
  | OpenIddictApplicationDeleteStatus404
  | OpenIddictApplicationDeleteStatus500
  | OpenIddictApplicationDeleteStatus501;
