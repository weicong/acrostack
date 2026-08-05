/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BackgroundJobRequeuePathId = string;

/**
 * @type any
 */
export type BackgroundJobRequeueStatus200 = any;

/**
 * @type any
 */
export type BackgroundJobRequeueStatus204 = any;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus400 =
  | BackgroundJobRequeueStatus400Plain
  | BackgroundJobRequeueStatus400Json
  | BackgroundJobRequeueStatus400Json2;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus401 =
  | BackgroundJobRequeueStatus401Plain
  | BackgroundJobRequeueStatus401Json
  | BackgroundJobRequeueStatus401Json2;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus403 =
  | BackgroundJobRequeueStatus403Plain
  | BackgroundJobRequeueStatus403Json
  | BackgroundJobRequeueStatus403Json2;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus404 =
  | BackgroundJobRequeueStatus404Plain
  | BackgroundJobRequeueStatus404Json
  | BackgroundJobRequeueStatus404Json2;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus500 =
  | BackgroundJobRequeueStatus500Plain
  | BackgroundJobRequeueStatus500Json
  | BackgroundJobRequeueStatus500Json2;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BackgroundJobRequeueStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BackgroundJobRequeueStatus501 =
  | BackgroundJobRequeueStatus501Plain
  | BackgroundJobRequeueStatus501Json
  | BackgroundJobRequeueStatus501Json2;

/**
 * @type object
 */
export type BackgroundJobRequeueRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BackgroundJobRequeuePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/background-job/${string}/requeue`;
};

/**
 * @type object
 */
export type BackgroundJobRequeueResponses = {
  "200": BackgroundJobRequeueStatus200;
  "204": BackgroundJobRequeueStatus204;
  "400": BackgroundJobRequeueStatus400;
  "401": BackgroundJobRequeueStatus401;
  "403": BackgroundJobRequeueStatus403;
  "404": BackgroundJobRequeueStatus404;
  "500": BackgroundJobRequeueStatus500;
  "501": BackgroundJobRequeueStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BackgroundJobRequeueResponse =
  | BackgroundJobRequeueStatus200
  | BackgroundJobRequeueStatus204
  | BackgroundJobRequeueStatus400
  | BackgroundJobRequeueStatus401
  | BackgroundJobRequeueStatus403
  | BackgroundJobRequeueStatus404
  | BackgroundJobRequeueStatus500
  | BackgroundJobRequeueStatus501;
