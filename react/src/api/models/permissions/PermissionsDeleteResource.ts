/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @type string | undefined
 */
export type PermissionsDeleteResourceQueryResourceName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsDeleteResourceQueryResourceKey = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsDeleteResourceQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsDeleteResourceQueryProviderKey = string | undefined;

/**
 * @type any
 */
export type PermissionsDeleteResourceStatus200 = any;

/**
 * @type any
 */
export type PermissionsDeleteResourceStatus204 = any;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus400 =
  | PermissionsDeleteResourceStatus400Plain
  | PermissionsDeleteResourceStatus400Json
  | PermissionsDeleteResourceStatus400Json2;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus401 =
  | PermissionsDeleteResourceStatus401Plain
  | PermissionsDeleteResourceStatus401Json
  | PermissionsDeleteResourceStatus401Json2;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus403 =
  | PermissionsDeleteResourceStatus403Plain
  | PermissionsDeleteResourceStatus403Json
  | PermissionsDeleteResourceStatus403Json2;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus404 =
  | PermissionsDeleteResourceStatus404Plain
  | PermissionsDeleteResourceStatus404Json
  | PermissionsDeleteResourceStatus404Json2;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus500 =
  | PermissionsDeleteResourceStatus500Plain
  | PermissionsDeleteResourceStatus500Json
  | PermissionsDeleteResourceStatus500Json2;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsDeleteResourceStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsDeleteResourceStatus501 =
  | PermissionsDeleteResourceStatus501Plain
  | PermissionsDeleteResourceStatus501Json
  | PermissionsDeleteResourceStatus501Json2;

/**
 * @type object
 */
export type PermissionsDeleteResourceRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsDeleteResourceQueryResourceName;
    resourceKey?: PermissionsDeleteResourceQueryResourceKey;
    providerName?: PermissionsDeleteResourceQueryProviderName;
    providerKey?: PermissionsDeleteResourceQueryProviderKey;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions/resource";
};

/**
 * @type object
 */
export type PermissionsDeleteResourceResponses = {
  "200": PermissionsDeleteResourceStatus200;
  "204": PermissionsDeleteResourceStatus204;
  "400": PermissionsDeleteResourceStatus400;
  "401": PermissionsDeleteResourceStatus401;
  "403": PermissionsDeleteResourceStatus403;
  "404": PermissionsDeleteResourceStatus404;
  "500": PermissionsDeleteResourceStatus500;
  "501": PermissionsDeleteResourceStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsDeleteResourceResponse =
  | PermissionsDeleteResourceStatus200
  | PermissionsDeleteResourceStatus204
  | PermissionsDeleteResourceStatus400
  | PermissionsDeleteResourceStatus401
  | PermissionsDeleteResourceStatus403
  | PermissionsDeleteResourceStatus404
  | PermissionsDeleteResourceStatus500
  | PermissionsDeleteResourceStatus501;
