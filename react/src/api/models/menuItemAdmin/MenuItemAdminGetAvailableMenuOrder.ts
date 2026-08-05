/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string | undefined
 */
export type MenuItemAdminGetAvailableMenuOrderQueryParentId = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type MenuItemAdminGetAvailableMenuOrderStatus200Plain = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type MenuItemAdminGetAvailableMenuOrderStatus200Json = number;

/**
 * @description
 * Format: `int32`
 * @type integer
 */
export type MenuItemAdminGetAvailableMenuOrderStatus200Json2 = number;

export type MenuItemAdminGetAvailableMenuOrderStatus200 =
  | MenuItemAdminGetAvailableMenuOrderStatus200Plain
  | MenuItemAdminGetAvailableMenuOrderStatus200Json
  | MenuItemAdminGetAvailableMenuOrderStatus200Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus400 =
  | MenuItemAdminGetAvailableMenuOrderStatus400Plain
  | MenuItemAdminGetAvailableMenuOrderStatus400Json
  | MenuItemAdminGetAvailableMenuOrderStatus400Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus401 =
  | MenuItemAdminGetAvailableMenuOrderStatus401Plain
  | MenuItemAdminGetAvailableMenuOrderStatus401Json
  | MenuItemAdminGetAvailableMenuOrderStatus401Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus403 =
  | MenuItemAdminGetAvailableMenuOrderStatus403Plain
  | MenuItemAdminGetAvailableMenuOrderStatus403Json
  | MenuItemAdminGetAvailableMenuOrderStatus403Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus404 =
  | MenuItemAdminGetAvailableMenuOrderStatus404Plain
  | MenuItemAdminGetAvailableMenuOrderStatus404Json
  | MenuItemAdminGetAvailableMenuOrderStatus404Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus500 =
  | MenuItemAdminGetAvailableMenuOrderStatus500Plain
  | MenuItemAdminGetAvailableMenuOrderStatus500Json
  | MenuItemAdminGetAvailableMenuOrderStatus500Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type MenuItemAdminGetAvailableMenuOrderStatus501 =
  | MenuItemAdminGetAvailableMenuOrderStatus501Plain
  | MenuItemAdminGetAvailableMenuOrderStatus501Json
  | MenuItemAdminGetAvailableMenuOrderStatus501Json2;

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    parentId?: MenuItemAdminGetAvailableMenuOrderQueryParentId;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/cms-kit-admin/menu-items/available-order";
};

/**
 * @type object
 */
export type MenuItemAdminGetAvailableMenuOrderResponses = {
  "200": MenuItemAdminGetAvailableMenuOrderStatus200;
  "400": MenuItemAdminGetAvailableMenuOrderStatus400;
  "401": MenuItemAdminGetAvailableMenuOrderStatus401;
  "403": MenuItemAdminGetAvailableMenuOrderStatus403;
  "404": MenuItemAdminGetAvailableMenuOrderStatus404;
  "500": MenuItemAdminGetAvailableMenuOrderStatus500;
  "501": MenuItemAdminGetAvailableMenuOrderStatus501;
};

/**
 * @description Union of all possible responses
 */
export type MenuItemAdminGetAvailableMenuOrderResponse =
  | MenuItemAdminGetAvailableMenuOrderStatus200
  | MenuItemAdminGetAvailableMenuOrderStatus400
  | MenuItemAdminGetAvailableMenuOrderStatus401
  | MenuItemAdminGetAvailableMenuOrderStatus403
  | MenuItemAdminGetAvailableMenuOrderStatus404
  | MenuItemAdminGetAvailableMenuOrderStatus500
  | MenuItemAdminGetAvailableMenuOrderStatus501;
