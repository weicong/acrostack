/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type TagAdminDeletePathId = string;

/**
 * @type any
 */
export type TagAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type TagAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type TagAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus400 =
  | TagAdminDeleteStatus400Plain
  | TagAdminDeleteStatus400Json
  | TagAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type TagAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus401 =
  | TagAdminDeleteStatus401Plain
  | TagAdminDeleteStatus401Json
  | TagAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type TagAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus403 =
  | TagAdminDeleteStatus403Plain
  | TagAdminDeleteStatus403Json
  | TagAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type TagAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus404 =
  | TagAdminDeleteStatus404Plain
  | TagAdminDeleteStatus404Json
  | TagAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type TagAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus500 =
  | TagAdminDeleteStatus500Plain
  | TagAdminDeleteStatus500Json
  | TagAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type TagAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type TagAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type TagAdminDeleteStatus501 =
  | TagAdminDeleteStatus501Plain
  | TagAdminDeleteStatus501Json
  | TagAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type TagAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: TagAdminDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/tags/${string}`;
};

/**
 * @type object
 */
export type TagAdminDeleteResponses = {
  "200": TagAdminDeleteStatus200;
  "204": TagAdminDeleteStatus204;
  "400": TagAdminDeleteStatus400;
  "401": TagAdminDeleteStatus401;
  "403": TagAdminDeleteStatus403;
  "404": TagAdminDeleteStatus404;
  "500": TagAdminDeleteStatus500;
  "501": TagAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type TagAdminDeleteResponse =
  | TagAdminDeleteStatus200
  | TagAdminDeleteStatus204
  | TagAdminDeleteStatus400
  | TagAdminDeleteStatus401
  | TagAdminDeleteStatus403
  | TagAdminDeleteStatus404
  | TagAdminDeleteStatus500
  | TagAdminDeleteStatus501;
