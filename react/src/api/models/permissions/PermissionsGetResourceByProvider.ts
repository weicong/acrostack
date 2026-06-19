/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto } from "../volo/abp/permissionManagement/GetResourcePermissionWithProviderListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsGetResourceByProviderQueryResourceName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetResourceByProviderQueryResourceKey = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetResourceByProviderQueryProviderName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsGetResourceByProviderQueryProviderKey = string | undefined;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus200Plain =
  VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus200Json =
  VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus200Json2 =
  VoloAbpPermissionManagementGetResourcePermissionWithProviderListResultDto;

export type PermissionsGetResourceByProviderStatus200 =
  | PermissionsGetResourceByProviderStatus200Plain
  | PermissionsGetResourceByProviderStatus200Json
  | PermissionsGetResourceByProviderStatus200Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus400 =
  | PermissionsGetResourceByProviderStatus400Plain
  | PermissionsGetResourceByProviderStatus400Json
  | PermissionsGetResourceByProviderStatus400Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus401 =
  | PermissionsGetResourceByProviderStatus401Plain
  | PermissionsGetResourceByProviderStatus401Json
  | PermissionsGetResourceByProviderStatus401Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus403 =
  | PermissionsGetResourceByProviderStatus403Plain
  | PermissionsGetResourceByProviderStatus403Json
  | PermissionsGetResourceByProviderStatus403Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus404 =
  | PermissionsGetResourceByProviderStatus404Plain
  | PermissionsGetResourceByProviderStatus404Json
  | PermissionsGetResourceByProviderStatus404Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus500 =
  | PermissionsGetResourceByProviderStatus500Plain
  | PermissionsGetResourceByProviderStatus500Json
  | PermissionsGetResourceByProviderStatus500Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsGetResourceByProviderStatus501 =
  | PermissionsGetResourceByProviderStatus501Plain
  | PermissionsGetResourceByProviderStatus501Json
  | PermissionsGetResourceByProviderStatus501Json2;

/**
 * @type object
 */
export type PermissionsGetResourceByProviderRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsGetResourceByProviderQueryResourceName;
    resourceKey?: PermissionsGetResourceByProviderQueryResourceKey;
    providerName?: PermissionsGetResourceByProviderQueryProviderName;
    providerKey?: PermissionsGetResourceByProviderQueryProviderKey;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions/resource/by-provider";
};

/**
 * @type object
 */
export type PermissionsGetResourceByProviderResponses = {
  "200": PermissionsGetResourceByProviderStatus200;
  "400": PermissionsGetResourceByProviderStatus400;
  "401": PermissionsGetResourceByProviderStatus401;
  "403": PermissionsGetResourceByProviderStatus403;
  "404": PermissionsGetResourceByProviderStatus404;
  "500": PermissionsGetResourceByProviderStatus500;
  "501": PermissionsGetResourceByProviderStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsGetResourceByProviderResponse =
  | PermissionsGetResourceByProviderStatus200
  | PermissionsGetResourceByProviderStatus400
  | PermissionsGetResourceByProviderStatus401
  | PermissionsGetResourceByProviderStatus403
  | PermissionsGetResourceByProviderStatus404
  | PermissionsGetResourceByProviderStatus500
  | PermissionsGetResourceByProviderStatus501;
