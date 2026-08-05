/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type MenuItemAdminDeletePathId = string;

/**
 * @type any
 */
export type MenuItemAdminDeleteStatus200 = any;

/**
 * @type any
 */
export type MenuItemAdminDeleteStatus204 = any;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus400 =
  | MenuItemAdminDeleteStatus400Plain
  | MenuItemAdminDeleteStatus400Json
  | MenuItemAdminDeleteStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus401 =
  | MenuItemAdminDeleteStatus401Plain
  | MenuItemAdminDeleteStatus401Json
  | MenuItemAdminDeleteStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus403 =
  | MenuItemAdminDeleteStatus403Plain
  | MenuItemAdminDeleteStatus403Json
  | MenuItemAdminDeleteStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus404 =
  | MenuItemAdminDeleteStatus404Plain
  | MenuItemAdminDeleteStatus404Json
  | MenuItemAdminDeleteStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus500 =
  | MenuItemAdminDeleteStatus500Plain
  | MenuItemAdminDeleteStatus500Json
  | MenuItemAdminDeleteStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminDeleteStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminDeleteStatus501 =
  | MenuItemAdminDeleteStatus501Plain
  | MenuItemAdminDeleteStatus501Json
  | MenuItemAdminDeleteStatus501Json2;

/**
 * @type object
 */
export type MenuItemAdminDeleteRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: MenuItemAdminDeletePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/cms-kit-admin/menu-items/${string}`;
};

/**
 * @type object
 */
export type MenuItemAdminDeleteResponses = {
  "200": MenuItemAdminDeleteStatus200;
  "204": MenuItemAdminDeleteStatus204;
  "400": MenuItemAdminDeleteStatus400;
  "401": MenuItemAdminDeleteStatus401;
  "403": MenuItemAdminDeleteStatus403;
  "404": MenuItemAdminDeleteStatus404;
  "500": MenuItemAdminDeleteStatus500;
  "501": MenuItemAdminDeleteStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminDeleteResponse =
  | MenuItemAdminDeleteStatus200
  | MenuItemAdminDeleteStatus204
  | MenuItemAdminDeleteStatus400
  | MenuItemAdminDeleteStatus401
  | MenuItemAdminDeleteStatus403
  | MenuItemAdminDeleteStatus404
  | MenuItemAdminDeleteStatus500
  | MenuItemAdminDeleteStatus501;
