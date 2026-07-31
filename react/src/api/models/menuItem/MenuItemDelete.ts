/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuItemDeletePathId = string;

/**
 * @type any
 */
export type MenuItemDeleteStatus200 = any;

/**
 * @type any
 */
export type MenuItemDeleteStatus204 = any;

/**
 * @type object
 */
export type MenuItemDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemDeleteStatus400 =
  | MenuItemDeleteStatus400Plain
  | MenuItemDeleteStatus400Json
  | MenuItemDeleteStatus400Json2;

/**
 * @type object
 */
export type MenuItemDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemDeleteStatus401 =
  | MenuItemDeleteStatus401Plain
  | MenuItemDeleteStatus401Json
  | MenuItemDeleteStatus401Json2;

/**
 * @type object
 */
export type MenuItemDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemDeleteStatus403 =
  | MenuItemDeleteStatus403Plain
  | MenuItemDeleteStatus403Json
  | MenuItemDeleteStatus403Json2;

/**
 * @type object
 */
export type MenuItemDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemDeleteStatus404 =
  | MenuItemDeleteStatus404Plain
  | MenuItemDeleteStatus404Json
  | MenuItemDeleteStatus404Json2;

/**
 * @type object
 */
export type MenuItemDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemDeleteStatus500 =
  | MenuItemDeleteStatus500Plain
  | MenuItemDeleteStatus500Json
  | MenuItemDeleteStatus500Json2;

/**
 * @type object
 */
export type MenuItemDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemDeleteStatus501 =
  | MenuItemDeleteStatus501Plain
  | MenuItemDeleteStatus501Json
  | MenuItemDeleteStatus501Json2;

/**
 * @type object
 */
export type MenuItemDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MenuItemDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/app/menu-item/${string}`;
};

/**
 * @type object
 */
export type MenuItemDeleteResponses = {
  "200": MenuItemDeleteStatus200;
  "204": MenuItemDeleteStatus204;
  "400": MenuItemDeleteStatus400;
  "401": MenuItemDeleteStatus401;
  "403": MenuItemDeleteStatus403;
  "404": MenuItemDeleteStatus404;
  "500": MenuItemDeleteStatus500;
  "501": MenuItemDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemDeleteResponse =
  | MenuItemDeleteStatus200
  | MenuItemDeleteStatus204
  | MenuItemDeleteStatus400
  | MenuItemDeleteStatus401
  | MenuItemDeleteStatus403
  | MenuItemDeleteStatus404
  | MenuItemDeleteStatus500
  | MenuItemDeleteStatus501;
