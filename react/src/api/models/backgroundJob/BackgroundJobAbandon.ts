/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BackgroundJobAbandonPathId = string;

/**
 * @type any
 */
export type BackgroundJobAbandonStatus200 = any;

/**
 * @type any
 */
export type BackgroundJobAbandonStatus204 = any;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus400 =
  | BackgroundJobAbandonStatus400Plain
  | BackgroundJobAbandonStatus400Json
  | BackgroundJobAbandonStatus400Json2;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus401 =
  | BackgroundJobAbandonStatus401Plain
  | BackgroundJobAbandonStatus401Json
  | BackgroundJobAbandonStatus401Json2;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus403 =
  | BackgroundJobAbandonStatus403Plain
  | BackgroundJobAbandonStatus403Json
  | BackgroundJobAbandonStatus403Json2;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus404 =
  | BackgroundJobAbandonStatus404Plain
  | BackgroundJobAbandonStatus404Json
  | BackgroundJobAbandonStatus404Json2;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus500 =
  | BackgroundJobAbandonStatus500Plain
  | BackgroundJobAbandonStatus500Json
  | BackgroundJobAbandonStatus500Json2;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobAbandonStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobAbandonStatus501 =
  | BackgroundJobAbandonStatus501Plain
  | BackgroundJobAbandonStatus501Json
  | BackgroundJobAbandonStatus501Json2;

/**
 * @type object
 */
export type BackgroundJobAbandonRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BackgroundJobAbandonPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/background-job/${string}/abandon`;
};

/**
 * @type object
 */
export type BackgroundJobAbandonResponses = {
  "200": BackgroundJobAbandonStatus200;
  "204": BackgroundJobAbandonStatus204;
  "400": BackgroundJobAbandonStatus400;
  "401": BackgroundJobAbandonStatus401;
  "403": BackgroundJobAbandonStatus403;
  "404": BackgroundJobAbandonStatus404;
  "500": BackgroundJobAbandonStatus500;
  "501": BackgroundJobAbandonStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobAbandonResponse =
  | BackgroundJobAbandonStatus200
  | BackgroundJobAbandonStatus204
  | BackgroundJobAbandonStatus400
  | BackgroundJobAbandonStatus401
  | BackgroundJobAbandonStatus403
  | BackgroundJobAbandonStatus404
  | BackgroundJobAbandonStatus500
  | BackgroundJobAbandonStatus501;
