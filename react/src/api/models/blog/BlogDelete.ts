/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogDeletePathId = string;

/**
 * @type any
 */
export type BlogDeleteStatus200 = any;

/**
 * @type any
 */
export type BlogDeleteStatus204 = any;

/**
 * @type object
 */
export type BlogDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogDeleteStatus400 =
  | BlogDeleteStatus400Plain
  | BlogDeleteStatus400Json
  | BlogDeleteStatus400Json2;

/**
 * @type object
 */
export type BlogDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogDeleteStatus401 =
  | BlogDeleteStatus401Plain
  | BlogDeleteStatus401Json
  | BlogDeleteStatus401Json2;

/**
 * @type object
 */
export type BlogDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogDeleteStatus403 =
  | BlogDeleteStatus403Plain
  | BlogDeleteStatus403Json
  | BlogDeleteStatus403Json2;

/**
 * @type object
 */
export type BlogDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogDeleteStatus404 =
  | BlogDeleteStatus404Plain
  | BlogDeleteStatus404Json
  | BlogDeleteStatus404Json2;

/**
 * @type object
 */
export type BlogDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogDeleteStatus500 =
  | BlogDeleteStatus500Plain
  | BlogDeleteStatus500Json
  | BlogDeleteStatus500Json2;

/**
 * @type object
 */
export type BlogDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogDeleteStatus501 =
  | BlogDeleteStatus501Plain
  | BlogDeleteStatus501Json
  | BlogDeleteStatus501Json2;

/**
 * @type object
 */
export type BlogDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/blog/${string}`;
};

/**
 * @type object
 */
export type BlogDeleteResponses = {
  "200": BlogDeleteStatus200;
  "204": BlogDeleteStatus204;
  "400": BlogDeleteStatus400;
  "401": BlogDeleteStatus401;
  "403": BlogDeleteStatus403;
  "404": BlogDeleteStatus404;
  "500": BlogDeleteStatus500;
  "501": BlogDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogDeleteResponse =
  | BlogDeleteStatus200
  | BlogDeleteStatus204
  | BlogDeleteStatus400
  | BlogDeleteStatus401
  | BlogDeleteStatus403
  | BlogDeleteStatus404
  | BlogDeleteStatus500
  | BlogDeleteStatus501;
