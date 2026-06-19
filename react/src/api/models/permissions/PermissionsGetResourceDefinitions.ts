/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto } from "../volo/abp/permissionManagement/GetResourcePermissionDefinitionListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsGetResourceDefinitionsQueryResourceName = string | undefined;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus200Plain =
  VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus200Json =
  VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus200Json2 =
  VoloAbpPermissionManagementGetResourcePermissionDefinitionListResultDto;

export type PermissionsGetResourceDefinitionsStatus200 =
  | PermissionsGetResourceDefinitionsStatus200Plain
  | PermissionsGetResourceDefinitionsStatus200Json
  | PermissionsGetResourceDefinitionsStatus200Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus400 =
  | PermissionsGetResourceDefinitionsStatus400Plain
  | PermissionsGetResourceDefinitionsStatus400Json
  | PermissionsGetResourceDefinitionsStatus400Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus401 =
  | PermissionsGetResourceDefinitionsStatus401Plain
  | PermissionsGetResourceDefinitionsStatus401Json
  | PermissionsGetResourceDefinitionsStatus401Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus403 =
  | PermissionsGetResourceDefinitionsStatus403Plain
  | PermissionsGetResourceDefinitionsStatus403Json
  | PermissionsGetResourceDefinitionsStatus403Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus404 =
  | PermissionsGetResourceDefinitionsStatus404Plain
  | PermissionsGetResourceDefinitionsStatus404Json
  | PermissionsGetResourceDefinitionsStatus404Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus500 =
  | PermissionsGetResourceDefinitionsStatus500Plain
  | PermissionsGetResourceDefinitionsStatus500Json
  | PermissionsGetResourceDefinitionsStatus500Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceDefinitionsStatus501 =
  | PermissionsGetResourceDefinitionsStatus501Plain
  | PermissionsGetResourceDefinitionsStatus501Json
  | PermissionsGetResourceDefinitionsStatus501Json2;

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsGetResourceDefinitionsQueryResourceName;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions/resource-definitions";
};

/**
 * @type object
 */
export type PermissionsGetResourceDefinitionsResponses = {
  "200": PermissionsGetResourceDefinitionsStatus200;
  "400": PermissionsGetResourceDefinitionsStatus400;
  "401": PermissionsGetResourceDefinitionsStatus401;
  "403": PermissionsGetResourceDefinitionsStatus403;
  "404": PermissionsGetResourceDefinitionsStatus404;
  "500": PermissionsGetResourceDefinitionsStatus500;
  "501": PermissionsGetResourceDefinitionsStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResourceDefinitionsResponse =
  | PermissionsGetResourceDefinitionsStatus200
  | PermissionsGetResourceDefinitionsStatus400
  | PermissionsGetResourceDefinitionsStatus401
  | PermissionsGetResourceDefinitionsStatus403
  | PermissionsGetResourceDefinitionsStatus404
  | PermissionsGetResourceDefinitionsStatus500
  | PermissionsGetResourceDefinitionsStatus501;
