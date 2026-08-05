/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type BlogAdminDeletePathId = string;

/**
 * @type any
 */
export type BlogAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type BlogAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type BlogAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus400 =
  | BlogAdminDeleteStatus400Plain
  | BlogAdminDeleteStatus400Json
  | BlogAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type BlogAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus401 =
  | BlogAdminDeleteStatus401Plain
  | BlogAdminDeleteStatus401Json
  | BlogAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type BlogAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus403 =
  | BlogAdminDeleteStatus403Plain
  | BlogAdminDeleteStatus403Json
  | BlogAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type BlogAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus404 =
  | BlogAdminDeleteStatus404Plain
  | BlogAdminDeleteStatus404Json
  | BlogAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type BlogAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus500 =
  | BlogAdminDeleteStatus500Plain
  | BlogAdminDeleteStatus500Json
  | BlogAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type BlogAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type BlogAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type BlogAdminDeleteStatus501 =
  | BlogAdminDeleteStatus501Plain
  | BlogAdminDeleteStatus501Json
  | BlogAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type BlogAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: BlogAdminDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/blogs/${string}`;
};

/**
 * @type object
 */
export type BlogAdminDeleteResponses = {
  "200": BlogAdminDeleteStatus200;
  "204": BlogAdminDeleteStatus204;
  "400": BlogAdminDeleteStatus400;
  "401": BlogAdminDeleteStatus401;
  "403": BlogAdminDeleteStatus403;
  "404": BlogAdminDeleteStatus404;
  "500": BlogAdminDeleteStatus500;
  "501": BlogAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type BlogAdminDeleteResponse =
  | BlogAdminDeleteStatus200
  | BlogAdminDeleteStatus204
  | BlogAdminDeleteStatus400
  | BlogAdminDeleteStatus401
  | BlogAdminDeleteStatus403
  | BlogAdminDeleteStatus404
  | BlogAdminDeleteStatus500
  | BlogAdminDeleteStatus501;
