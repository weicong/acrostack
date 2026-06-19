/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BookDeletePathId = string;

/**
 * @type any
 */
export type BookDeleteStatus200 = any;

/**
 * @type any
 */
export type BookDeleteStatus204 = any;

/**
 * @type object
 */
export type BookDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus400 =
  | BookDeleteStatus400Plain
  | BookDeleteStatus400Json
  | BookDeleteStatus400Json2;

/**
 * @type object
 */
export type BookDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus401 =
  | BookDeleteStatus401Plain
  | BookDeleteStatus401Json
  | BookDeleteStatus401Json2;

/**
 * @type object
 */
export type BookDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus403 =
  | BookDeleteStatus403Plain
  | BookDeleteStatus403Json
  | BookDeleteStatus403Json2;

/**
 * @type object
 */
export type BookDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus404 =
  | BookDeleteStatus404Plain
  | BookDeleteStatus404Json
  | BookDeleteStatus404Json2;

/**
 * @type object
 */
export type BookDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus500 =
  | BookDeleteStatus500Plain
  | BookDeleteStatus500Json
  | BookDeleteStatus500Json2;

/**
 * @type object
 */
export type BookDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BookDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BookDeleteStatus501 =
  | BookDeleteStatus501Plain
  | BookDeleteStatus501Json
  | BookDeleteStatus501Json2;

/**
 * @type object
 */
export type BookDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BookDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/book/${string}`;
};

/**
 * @type object
 */
export type BookDeleteResponses = {
  "200": BookDeleteStatus200;
  "204": BookDeleteStatus204;
  "400": BookDeleteStatus400;
  "401": BookDeleteStatus401;
  "403": BookDeleteStatus403;
  "404": BookDeleteStatus404;
  "500": BookDeleteStatus500;
  "501": BookDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BookDeleteResponse =
  | BookDeleteStatus200
  | BookDeleteStatus204
  | BookDeleteStatus400
  | BookDeleteStatus401
  | BookDeleteStatus403
  | BookDeleteStatus404
  | BookDeleteStatus500
  | BookDeleteStatus501;
