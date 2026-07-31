/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type PageDeletePathId = string;

/**
 * @type any
 */
export type PageDeleteStatus200 = any;

/**
 * @type any
 */
export type PageDeleteStatus204 = any;

/**
 * @type object
 */
export type PageDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageDeleteStatus400 =
  | PageDeleteStatus400Plain
  | PageDeleteStatus400Json
  | PageDeleteStatus400Json2;

/**
 * @type object
 */
export type PageDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageDeleteStatus401 =
  | PageDeleteStatus401Plain
  | PageDeleteStatus401Json
  | PageDeleteStatus401Json2;

/**
 * @type object
 */
export type PageDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageDeleteStatus403 =
  | PageDeleteStatus403Plain
  | PageDeleteStatus403Json
  | PageDeleteStatus403Json2;

/**
 * @type object
 */
export type PageDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageDeleteStatus404 =
  | PageDeleteStatus404Plain
  | PageDeleteStatus404Json
  | PageDeleteStatus404Json2;

/**
 * @type object
 */
export type PageDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageDeleteStatus500 =
  | PageDeleteStatus500Plain
  | PageDeleteStatus500Json
  | PageDeleteStatus500Json2;

/**
 * @type object
 */
export type PageDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PageDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PageDeleteStatus501 =
  | PageDeleteStatus501Plain
  | PageDeleteStatus501Json
  | PageDeleteStatus501Json2;

/**
 * @type object
 */
export type PageDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: PageDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/page/${string}`;
};

/**
 * @type object
 */
export type PageDeleteResponses = {
  "200": PageDeleteStatus200;
  "204": PageDeleteStatus204;
  "400": PageDeleteStatus400;
  "401": PageDeleteStatus401;
  "403": PageDeleteStatus403;
  "404": PageDeleteStatus404;
  "500": PageDeleteStatus500;
  "501": PageDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PageDeleteResponse =
  | PageDeleteStatus200
  | PageDeleteStatus204
  | PageDeleteStatus400
  | PageDeleteStatus401
  | PageDeleteStatus403
  | PageDeleteStatus404
  | PageDeleteStatus500
  | PageDeleteStatus501;
