/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementGetPermissionListResultDto } from "../volo/abp/permissionManagement/GetPermissionListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsGetByGroupQueryGroupName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetByGroupQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetByGroupQueryProviderKey = string | undefined;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus200Plain =
  VoloAbpPermissionManagementGetPermissionListResultDto;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus200Json =
  VoloAbpPermissionManagementGetPermissionListResultDto;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus200Json2 =
  VoloAbpPermissionManagementGetPermissionListResultDto;

export type PermissionsGetByGroupStatus200 =
  | PermissionsGetByGroupStatus200Plain
  | PermissionsGetByGroupStatus200Json
  | PermissionsGetByGroupStatus200Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus400 =
  | PermissionsGetByGroupStatus400Plain
  | PermissionsGetByGroupStatus400Json
  | PermissionsGetByGroupStatus400Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus401 =
  | PermissionsGetByGroupStatus401Plain
  | PermissionsGetByGroupStatus401Json
  | PermissionsGetByGroupStatus401Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus403 =
  | PermissionsGetByGroupStatus403Plain
  | PermissionsGetByGroupStatus403Json
  | PermissionsGetByGroupStatus403Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus404 =
  | PermissionsGetByGroupStatus404Plain
  | PermissionsGetByGroupStatus404Json
  | PermissionsGetByGroupStatus404Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus500 =
  | PermissionsGetByGroupStatus500Plain
  | PermissionsGetByGroupStatus500Json
  | PermissionsGetByGroupStatus500Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetByGroupStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetByGroupStatus501 =
  | PermissionsGetByGroupStatus501Plain
  | PermissionsGetByGroupStatus501Json
  | PermissionsGetByGroupStatus501Json2;

/**
 * @type object
 */
export type PermissionsGetByGroupRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    groupName?: PermissionsGetByGroupQueryGroupName;
    providerName?: PermissionsGetByGroupQueryProviderName;
    providerKey?: PermissionsGetByGroupQueryProviderKey;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions/by-group";
};

/**
 * @type object
 */
export type PermissionsGetByGroupResponses = {
  "200": PermissionsGetByGroupStatus200;
  "400": PermissionsGetByGroupStatus400;
  "401": PermissionsGetByGroupStatus401;
  "403": PermissionsGetByGroupStatus403;
  "404": PermissionsGetByGroupStatus404;
  "500": PermissionsGetByGroupStatus500;
  "501": PermissionsGetByGroupStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetByGroupResponse =
  | PermissionsGetByGroupStatus200
  | PermissionsGetByGroupStatus400
  | PermissionsGetByGroupStatus401
  | PermissionsGetByGroupStatus403
  | PermissionsGetByGroupStatus404
  | PermissionsGetByGroupStatus500
  | PermissionsGetByGroupStatus501;
