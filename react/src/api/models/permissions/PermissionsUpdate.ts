/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementUpdatePermissionsDto } from "../volo/abp/permissionManagement/UpdatePermissionsDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsUpdateQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsUpdateQueryProviderKey = string | undefined;

/**
 * @type any
 */
export type PermissionsUpdateStatus200 = any;

/**
 * @type any
 */
export type PermissionsUpdateStatus204 = any;

/**
 * @type object
 */
export type PermissionsUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus400 =
  | PermissionsUpdateStatus400Plain
  | PermissionsUpdateStatus400Json
  | PermissionsUpdateStatus400Json2;

/**
 * @type object
 */
export type PermissionsUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus401 =
  | PermissionsUpdateStatus401Plain
  | PermissionsUpdateStatus401Json
  | PermissionsUpdateStatus401Json2;

/**
 * @type object
 */
export type PermissionsUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus403 =
  | PermissionsUpdateStatus403Plain
  | PermissionsUpdateStatus403Json
  | PermissionsUpdateStatus403Json2;

/**
 * @type object
 */
export type PermissionsUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus404 =
  | PermissionsUpdateStatus404Plain
  | PermissionsUpdateStatus404Json
  | PermissionsUpdateStatus404Json2;

/**
 * @type object
 */
export type PermissionsUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus500 =
  | PermissionsUpdateStatus500Plain
  | PermissionsUpdateStatus500Json
  | PermissionsUpdateStatus500Json2;

/**
 * @type object
 */
export type PermissionsUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsUpdateStatus501 =
  | PermissionsUpdateStatus501Plain
  | PermissionsUpdateStatus501Json
  | PermissionsUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type PermissionsUpdateJsonData = VoloAbpPermissionManagementUpdatePermissionsDto | undefined;

/**
 * @type object | undefined
 */
export type PermissionsUpdateJson2Data =
  | VoloAbpPermissionManagementUpdatePermissionsDto
  | undefined;

/**
 * @type object | undefined
 */
export type PermissionsUpdateJson3Data =
  | VoloAbpPermissionManagementUpdatePermissionsDto
  | undefined;

export type PermissionsUpdateData =
  | PermissionsUpdateJsonData
  | PermissionsUpdateJson2Data
  | PermissionsUpdateJson3Data;

/**
 * @type object
 */
export type PermissionsUpdateRequestConfig = {
  data?: PermissionsUpdateData;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    providerName?: PermissionsUpdateQueryProviderName;
    providerKey?: PermissionsUpdateQueryProviderKey;
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
export type PermissionsUpdateResponses = {
  "200": PermissionsUpdateStatus200;
  "204": PermissionsUpdateStatus204;
  "400": PermissionsUpdateStatus400;
  "401": PermissionsUpdateStatus401;
  "403": PermissionsUpdateStatus403;
  "404": PermissionsUpdateStatus404;
  "500": PermissionsUpdateStatus500;
  "501": PermissionsUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsUpdateResponse =
  | PermissionsUpdateStatus200
  | PermissionsUpdateStatus204
  | PermissionsUpdateStatus400
  | PermissionsUpdateStatus401
  | PermissionsUpdateStatus403
  | PermissionsUpdateStatus404
  | PermissionsUpdateStatus500
  | PermissionsUpdateStatus501;
