/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementGetPermissionListResultDto } from "../volo/abp/permissionManagement/GetPermissionListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsGetQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetQueryProviderKey = string | undefined;

/**
 * @type object
 */
export type PermissionsGetStatus200Plain = VoloAbpPermissionManagementGetPermissionListResultDto;

/**
 * @type object
 */
export type PermissionsGetStatus200Json = VoloAbpPermissionManagementGetPermissionListResultDto;

/**
 * @type object
 */
export type PermissionsGetStatus200Json2 = VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetStatus200 =
  | PermissionsGetStatus200Plain
  | PermissionsGetStatus200Json
  | PermissionsGetStatus200Json2;

/**
 * @type object
 */
export type PermissionsGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus400 =
  | PermissionsGetStatus400Plain
  | PermissionsGetStatus400Json
  | PermissionsGetStatus400Json2;

/**
 * @type object
 */
export type PermissionsGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus401 =
  | PermissionsGetStatus401Plain
  | PermissionsGetStatus401Json
  | PermissionsGetStatus401Json2;

/**
 * @type object
 */
export type PermissionsGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus403 =
  | PermissionsGetStatus403Plain
  | PermissionsGetStatus403Json
  | PermissionsGetStatus403Json2;

/**
 * @type object
 */
export type PermissionsGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus404 =
  | PermissionsGetStatus404Plain
  | PermissionsGetStatus404Json
  | PermissionsGetStatus404Json2;

/**
 * @type object
 */
export type PermissionsGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus500 =
  | PermissionsGetStatus500Plain
  | PermissionsGetStatus500Json
  | PermissionsGetStatus500Json2;

/**
 * @type object
 */
export type PermissionsGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetStatus501 =
  | PermissionsGetStatus501Plain
  | PermissionsGetStatus501Json
  | PermissionsGetStatus501Json2;

/**
 * @type object
 */
export type PermissionsGetRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    providerName?: PermissionsGetQueryProviderName;
    providerKey?: PermissionsGetQueryProviderKey;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions";
};

/**
 * @type object
 */
export type PermissionsGetResponses = {
  "200": PermissionsGetStatus200;
  "400": PermissionsGetStatus400;
  "401": PermissionsGetStatus401;
  "403": PermissionsGetStatus403;
  "404": PermissionsGetStatus404;
  "500": PermissionsGetStatus500;
  "501": PermissionsGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResponse =
  | PermissionsGetStatus200
  | PermissionsGetStatus400
  | PermissionsGetStatus401
  | PermissionsGetStatus403
  | PermissionsGetStatus404
  | PermissionsGetStatus500
  | PermissionsGetStatus501;
