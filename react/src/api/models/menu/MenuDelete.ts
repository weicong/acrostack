/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuDeletePathId = string;

/**
 * @type any
 */
export type MenuDeleteStatus200 = any;

/**
 * @type any
 */
export type MenuDeleteStatus204 = any;

/**
 * @type object
 */
export type MenuDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuDeleteStatus400 =
  | MenuDeleteStatus400Plain
  | MenuDeleteStatus400Json
  | MenuDeleteStatus400Json2;

/**
 * @type object
 */
export type MenuDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuDeleteStatus401 =
  | MenuDeleteStatus401Plain
  | MenuDeleteStatus401Json
  | MenuDeleteStatus401Json2;

/**
 * @type object
 */
export type MenuDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuDeleteStatus403 =
  | MenuDeleteStatus403Plain
  | MenuDeleteStatus403Json
  | MenuDeleteStatus403Json2;

/**
 * @type object
 */
export type MenuDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuDeleteStatus404 =
  | MenuDeleteStatus404Plain
  | MenuDeleteStatus404Json
  | MenuDeleteStatus404Json2;

/**
 * @type object
 */
export type MenuDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuDeleteStatus500 =
  | MenuDeleteStatus500Plain
  | MenuDeleteStatus500Json
  | MenuDeleteStatus500Json2;

/**
 * @type object
 */
export type MenuDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuDeleteStatus501 =
  | MenuDeleteStatus501Plain
  | MenuDeleteStatus501Json
  | MenuDeleteStatus501Json2;

/**
 * @type object
 */
export type MenuDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MenuDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/menu/${string}`;
};

/**
 * @type object
 */
export type MenuDeleteResponses = {
  "200": MenuDeleteStatus200;
  "204": MenuDeleteStatus204;
  "400": MenuDeleteStatus400;
  "401": MenuDeleteStatus401;
  "403": MenuDeleteStatus403;
  "404": MenuDeleteStatus404;
  "500": MenuDeleteStatus500;
  "501": MenuDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuDeleteResponse =
  | MenuDeleteStatus200
  | MenuDeleteStatus204
  | MenuDeleteStatus400
  | MenuDeleteStatus401
  | MenuDeleteStatus403
  | MenuDeleteStatus404
  | MenuDeleteStatus500
  | MenuDeleteStatus501;
