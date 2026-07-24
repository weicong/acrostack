/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BackgroundJobDeletePathId = string;

/**
 * @type any
 */
export type BackgroundJobDeleteStatus200 = any;

/**
 * @type any
 */
export type BackgroundJobDeleteStatus204 = any;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus400 =
  | BackgroundJobDeleteStatus400Plain
  | BackgroundJobDeleteStatus400Json
  | BackgroundJobDeleteStatus400Json2;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus401 =
  | BackgroundJobDeleteStatus401Plain
  | BackgroundJobDeleteStatus401Json
  | BackgroundJobDeleteStatus401Json2;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus403 =
  | BackgroundJobDeleteStatus403Plain
  | BackgroundJobDeleteStatus403Json
  | BackgroundJobDeleteStatus403Json2;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus404 =
  | BackgroundJobDeleteStatus404Plain
  | BackgroundJobDeleteStatus404Json
  | BackgroundJobDeleteStatus404Json2;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus500 =
  | BackgroundJobDeleteStatus500Plain
  | BackgroundJobDeleteStatus500Json
  | BackgroundJobDeleteStatus500Json2;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobDeleteStatus501 =
  | BackgroundJobDeleteStatus501Plain
  | BackgroundJobDeleteStatus501Json
  | BackgroundJobDeleteStatus501Json2;

/**
 * @type object
 */
export type BackgroundJobDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BackgroundJobDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/background-job/${string}`;
};

/**
 * @type object
 */
export type BackgroundJobDeleteResponses = {
  "200": BackgroundJobDeleteStatus200;
  "204": BackgroundJobDeleteStatus204;
  "400": BackgroundJobDeleteStatus400;
  "401": BackgroundJobDeleteStatus401;
  "403": BackgroundJobDeleteStatus403;
  "404": BackgroundJobDeleteStatus404;
  "500": BackgroundJobDeleteStatus500;
  "501": BackgroundJobDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobDeleteResponse =
  | BackgroundJobDeleteStatus200
  | BackgroundJobDeleteStatus204
  | BackgroundJobDeleteStatus400
  | BackgroundJobDeleteStatus401
  | BackgroundJobDeleteStatus403
  | BackgroundJobDeleteStatus404
  | BackgroundJobDeleteStatus500
  | BackgroundJobDeleteStatus501;
