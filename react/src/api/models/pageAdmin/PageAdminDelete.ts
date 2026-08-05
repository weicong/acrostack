/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageAdminDeletePathId = string;

/**
 * @type any
 */
export type PageAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type PageAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type PageAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus400 =
  | PageAdminDeleteStatus400Plain
  | PageAdminDeleteStatus400Json
  | PageAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type PageAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus401 =
  | PageAdminDeleteStatus401Plain
  | PageAdminDeleteStatus401Json
  | PageAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type PageAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus403 =
  | PageAdminDeleteStatus403Plain
  | PageAdminDeleteStatus403Json
  | PageAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type PageAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus404 =
  | PageAdminDeleteStatus404Plain
  | PageAdminDeleteStatus404Json
  | PageAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type PageAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus500 =
  | PageAdminDeleteStatus500Plain
  | PageAdminDeleteStatus500Json
  | PageAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type PageAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageAdminDeleteStatus501 =
  | PageAdminDeleteStatus501Plain
  | PageAdminDeleteStatus501Json
  | PageAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type PageAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: PageAdminDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/pages/${string}`;
};

/**
 * @type object
 */
export type PageAdminDeleteResponses = {
  "200": PageAdminDeleteStatus200;
  "204": PageAdminDeleteStatus204;
  "400": PageAdminDeleteStatus400;
  "401": PageAdminDeleteStatus401;
  "403": PageAdminDeleteStatus403;
  "404": PageAdminDeleteStatus404;
  "500": PageAdminDeleteStatus500;
  "501": PageAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageAdminDeleteResponse =
  | PageAdminDeleteStatus200
  | PageAdminDeleteStatus204
  | PageAdminDeleteStatus400
  | PageAdminDeleteStatus401
  | PageAdminDeleteStatus403
  | PageAdminDeleteStatus404
  | PageAdminDeleteStatus500
  | PageAdminDeleteStatus501;
