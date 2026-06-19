/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementGetResourceProviderListResultDto } from "../volo/abp/permissionManagement/GetResourceProviderListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsGetResourceProviderKeyLookupServicesQueryResourceName = string | undefined;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus200Plain =
  VoloAbpPermissionManagementGetResourceProviderListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus200Json =
  VoloAbpPermissionManagementGetResourceProviderListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus200Json2 =
  VoloAbpPermissionManagementGetResourceProviderListResultDto;

export type PermissionsGetResourceProviderKeyLookupServicesStatus200 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus200Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus200Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus200Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus400 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus400Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus400Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus400Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus401 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus401Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus401Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus401Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus403 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus403Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus403Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus403Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus404 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus404Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus404Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus404Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus500 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus500Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus500Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus500Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceProviderKeyLookupServicesStatus501 =
  | PermissionsGetResourceProviderKeyLookupServicesStatus501Plain
  | PermissionsGetResourceProviderKeyLookupServicesStatus501Json
  | PermissionsGetResourceProviderKeyLookupServicesStatus501Json2;

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsGetResourceProviderKeyLookupServicesQueryResourceName;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions/resource-provider-key-lookup-services";
};

/**
 * @type object
 */
export type PermissionsGetResourceProviderKeyLookupServicesResponses = {
  "200": PermissionsGetResourceProviderKeyLookupServicesStatus200;
  "400": PermissionsGetResourceProviderKeyLookupServicesStatus400;
  "401": PermissionsGetResourceProviderKeyLookupServicesStatus401;
  "403": PermissionsGetResourceProviderKeyLookupServicesStatus403;
  "404": PermissionsGetResourceProviderKeyLookupServicesStatus404;
  "500": PermissionsGetResourceProviderKeyLookupServicesStatus500;
  "501": PermissionsGetResourceProviderKeyLookupServicesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResourceProviderKeyLookupServicesResponse =
  | PermissionsGetResourceProviderKeyLookupServicesStatus200
  | PermissionsGetResourceProviderKeyLookupServicesStatus400
  | PermissionsGetResourceProviderKeyLookupServicesStatus401
  | PermissionsGetResourceProviderKeyLookupServicesStatus403
  | PermissionsGetResourceProviderKeyLookupServicesStatus404
  | PermissionsGetResourceProviderKeyLookupServicesStatus500
  | PermissionsGetResourceProviderKeyLookupServicesStatus501;
