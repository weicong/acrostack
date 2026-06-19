/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementUpdateResourcePermissionsDto } from "../volo/abp/permissionManagement/UpdateResourcePermissionsDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsUpdateResourceQueryResourceName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsUpdateResourceQueryResourceKey = string | undefined;

/**
 * @type any
 */
export type PermissionsUpdateResourceStatus200 = any;

/**
 * @type any
 */
export type PermissionsUpdateResourceStatus204 = any;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus400 =
  | PermissionsUpdateResourceStatus400Plain
  | PermissionsUpdateResourceStatus400Json
  | PermissionsUpdateResourceStatus400Json2;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus401 =
  | PermissionsUpdateResourceStatus401Plain
  | PermissionsUpdateResourceStatus401Json
  | PermissionsUpdateResourceStatus401Json2;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus403 =
  | PermissionsUpdateResourceStatus403Plain
  | PermissionsUpdateResourceStatus403Json
  | PermissionsUpdateResourceStatus403Json2;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus404 =
  | PermissionsUpdateResourceStatus404Plain
  | PermissionsUpdateResourceStatus404Json
  | PermissionsUpdateResourceStatus404Json2;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus500 =
  | PermissionsUpdateResourceStatus500Plain
  | PermissionsUpdateResourceStatus500Json
  | PermissionsUpdateResourceStatus500Json2;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateResourceStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateResourceStatus501 =
  | PermissionsUpdateResourceStatus501Plain
  | PermissionsUpdateResourceStatus501Json
  | PermissionsUpdateResourceStatus501Json2;

/**
 * @type object | undefined
 */
export type PermissionsUpdateResourceJsonData =
  | VoloAbpPermissionManagementUpdateResourcePermissionsDto
  | undefined;

/**
 * @type object | undefined
 */
export type PermissionsUpdateResourceJson2Data =
  | VoloAbpPermissionManagementUpdateResourcePermissionsDto
  | undefined;

/**
 * @type object | undefined
 */
export type PermissionsUpdateResourceJson3Data =
  | VoloAbpPermissionManagementUpdateResourcePermissionsDto
  | undefined;

export type PermissionsUpdateResourceData =
  | PermissionsUpdateResourceJsonData
  | PermissionsUpdateResourceJson2Data
  | PermissionsUpdateResourceJson3Data;

/**
 * @type object
 */
export type PermissionsUpdateResourceRequestConfig = {
  data?: PermissionsUpdateResourceData;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsUpdateResourceQueryResourceName;
    resourceKey?: PermissionsUpdateResourceQueryResourceKey;
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
export type PermissionsUpdateResourceResponses = {
  "200": PermissionsUpdateResourceStatus200;
  "204": PermissionsUpdateResourceStatus204;
  "400": PermissionsUpdateResourceStatus400;
  "401": PermissionsUpdateResourceStatus401;
  "403": PermissionsUpdateResourceStatus403;
  "404": PermissionsUpdateResourceStatus404;
  "500": PermissionsUpdateResourceStatus500;
  "501": PermissionsUpdateResourceStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsUpdateResourceResponse =
  | PermissionsUpdateResourceStatus200
  | PermissionsUpdateResourceStatus204
  | PermissionsUpdateResourceStatus400
  | PermissionsUpdateResourceStatus401
  | PermissionsUpdateResourceStatus403
  | PermissionsUpdateResourceStatus404
  | PermissionsUpdateResourceStatus500
  | PermissionsUpdateResourceStatus501;
