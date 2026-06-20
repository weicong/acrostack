/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type AppUserDeletePathId = string;

/**
 * @type any
 */
export type AppUserDeleteStatus200 = any;

/**
 * @type any
 */
export type AppUserDeleteStatus204 = any;

/**
 * @type object
 */
export type AppUserDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus400 =
  | AppUserDeleteStatus400Plain
  | AppUserDeleteStatus400Json
  | AppUserDeleteStatus400Json2;

/**
 * @type object
 */
export type AppUserDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus401 =
  | AppUserDeleteStatus401Plain
  | AppUserDeleteStatus401Json
  | AppUserDeleteStatus401Json2;

/**
 * @type object
 */
export type AppUserDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus403 =
  | AppUserDeleteStatus403Plain
  | AppUserDeleteStatus403Json
  | AppUserDeleteStatus403Json2;

/**
 * @type object
 */
export type AppUserDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus404 =
  | AppUserDeleteStatus404Plain
  | AppUserDeleteStatus404Json
  | AppUserDeleteStatus404Json2;

/**
 * @type object
 */
export type AppUserDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus500 =
  | AppUserDeleteStatus500Plain
  | AppUserDeleteStatus500Json
  | AppUserDeleteStatus500Json2;

/**
 * @type object
 */
export type AppUserDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type AppUserDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type AppUserDeleteStatus501 =
  | AppUserDeleteStatus501Plain
  | AppUserDeleteStatus501Json
  | AppUserDeleteStatus501Json2;

/**
 * @type object
 */
export type AppUserDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: AppUserDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/app-user/${string}`;
};

/**
 * @type object
 */
export type AppUserDeleteResponses = {
  "200": AppUserDeleteStatus200;
  "204": AppUserDeleteStatus204;
  "400": AppUserDeleteStatus400;
  "401": AppUserDeleteStatus401;
  "403": AppUserDeleteStatus403;
  "404": AppUserDeleteStatus404;
  "500": AppUserDeleteStatus500;
  "501": AppUserDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type AppUserDeleteResponse =
  | AppUserDeleteStatus200
  | AppUserDeleteStatus204
  | AppUserDeleteStatus400
  | AppUserDeleteStatus401
  | AppUserDeleteStatus403
  | AppUserDeleteStatus404
  | AppUserDeleteStatus500
  | AppUserDeleteStatus501;
