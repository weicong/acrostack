/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementGetResourcePermissionListResultDto } from "../volo/abp/permissionManagement/GetResourcePermissionListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsGetResourceQueryResourceName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetResourceQueryResourceKey = string | undefined;

/**
 * @type object
 */
export type PermissionsGetResourceStatus200Plain =
  VoloAbpPermissionManagementGetResourcePermissionListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceStatus200Json =
  VoloAbpPermissionManagementGetResourcePermissionListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceStatus200Json2 =
  VoloAbpPermissionManagementGetResourcePermissionListResultDto;

export type PermissionsGetResourceStatus200 =
  | PermissionsGetResourceStatus200Plain
  | PermissionsGetResourceStatus200Json
  | PermissionsGetResourceStatus200Json2;

/**
 * @type object
 */
export type PermissionsGetResourceStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus400 =
  | PermissionsGetResourceStatus400Plain
  | PermissionsGetResourceStatus400Json
  | PermissionsGetResourceStatus400Json2;

/**
 * @type object
 */
export type PermissionsGetResourceStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus401 =
  | PermissionsGetResourceStatus401Plain
  | PermissionsGetResourceStatus401Json
  | PermissionsGetResourceStatus401Json2;

/**
 * @type object
 */
export type PermissionsGetResourceStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus403 =
  | PermissionsGetResourceStatus403Plain
  | PermissionsGetResourceStatus403Json
  | PermissionsGetResourceStatus403Json2;

/**
 * @type object
 */
export type PermissionsGetResourceStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus404 =
  | PermissionsGetResourceStatus404Plain
  | PermissionsGetResourceStatus404Json
  | PermissionsGetResourceStatus404Json2;

/**
 * @type object
 */
export type PermissionsGetResourceStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus500 =
  | PermissionsGetResourceStatus500Plain
  | PermissionsGetResourceStatus500Json
  | PermissionsGetResourceStatus500Json2;

/**
 * @type object
 */
export type PermissionsGetResourceStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceStatus501 =
  | PermissionsGetResourceStatus501Plain
  | PermissionsGetResourceStatus501Json
  | PermissionsGetResourceStatus501Json2;

/**
 * @type object
 */
export type PermissionsGetResourceRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsGetResourceQueryResourceName;
    resourceKey?: PermissionsGetResourceQueryResourceKey;
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
export type PermissionsGetResourceResponses = {
  "200": PermissionsGetResourceStatus200;
  "400": PermissionsGetResourceStatus400;
  "401": PermissionsGetResourceStatus401;
  "403": PermissionsGetResourceStatus403;
  "404": PermissionsGetResourceStatus404;
  "500": PermissionsGetResourceStatus500;
  "501": PermissionsGetResourceStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResourceResponse =
  | PermissionsGetResourceStatus200
  | PermissionsGetResourceStatus400
  | PermissionsGetResourceStatus401
  | PermissionsGetResourceStatus403
  | PermissionsGetResourceStatus404
  | PermissionsGetResourceStatus500
  | PermissionsGetResourceStatus501;
