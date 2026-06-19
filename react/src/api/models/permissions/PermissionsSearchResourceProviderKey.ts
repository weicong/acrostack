/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpPermissionManagementSearchProviderKeyListResultDto } from "../volo/abp/permissionManagement/SearchProviderKeyListResultDto.ts";

/**
 * @type string | undefined
 */
export type PermissionsSearchResourceProviderKeyQueryResourceName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsSearchResourceProviderKeyQueryServiceName = string | undefined;

/**
 * @type string | undefined
 */
export type PermissionsSearchResourceProviderKeyQueryFilter = string | undefined;

/**
 * @description
 * Format: `int32`
 * @type integer | undefined
 */
export type PermissionsSearchResourceProviderKeyQueryPage = number | undefined;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus200Plain =
  VoloAbpPermissionManagementSearchProviderKeyListResultDto;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus200Json =
  VoloAbpPermissionManagementSearchProviderKeyListResultDto;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus200Json2 =
  VoloAbpPermissionManagementSearchProviderKeyListResultDto;

export type PermissionsSearchResourceProviderKeyStatus200 =
  | PermissionsSearchResourceProviderKeyStatus200Plain
  | PermissionsSearchResourceProviderKeyStatus200Json
  | PermissionsSearchResourceProviderKeyStatus200Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus400Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus400Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus400Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus400 =
  | PermissionsSearchResourceProviderKeyStatus400Plain
  | PermissionsSearchResourceProviderKeyStatus400Json
  | PermissionsSearchResourceProviderKeyStatus400Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus401Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus401Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus401Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus401 =
  | PermissionsSearchResourceProviderKeyStatus401Plain
  | PermissionsSearchResourceProviderKeyStatus401Json
  | PermissionsSearchResourceProviderKeyStatus401Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus403Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus403Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus403Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus403 =
  | PermissionsSearchResourceProviderKeyStatus403Plain
  | PermissionsSearchResourceProviderKeyStatus403Json
  | PermissionsSearchResourceProviderKeyStatus403Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus404Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus404Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus404Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus404 =
  | PermissionsSearchResourceProviderKeyStatus404Plain
  | PermissionsSearchResourceProviderKeyStatus404Json
  | PermissionsSearchResourceProviderKeyStatus404Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus500Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus500Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus500Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus500 =
  | PermissionsSearchResourceProviderKeyStatus500Plain
  | PermissionsSearchResourceProviderKeyStatus500Json
  | PermissionsSearchResourceProviderKeyStatus500Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus501Plain =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus501Json =
  VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyStatus501Json2 =
  VoloAbpHttpRemoteServiceErrorResponse;

export type PermissionsSearchResourceProviderKeyStatus501 =
  | PermissionsSearchResourceProviderKeyStatus501Plain
  | PermissionsSearchResourceProviderKeyStatus501Json
  | PermissionsSearchResourceProviderKeyStatus501Json2;

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyRequestConfig = {
  data?: never;
  pathParams?: never;
  /**
   * @type object | undefined
   */
  queryParams?: {
    resourceName?: PermissionsSearchResourceProviderKeyQueryResourceName;
    serviceName?: PermissionsSearchResourceProviderKeyQueryServiceName;
    filter?: PermissionsSearchResourceProviderKeyQueryFilter;
    page?: PermissionsSearchResourceProviderKeyQueryPage;
  };
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/permission-management/permissions/search-resource-provider-keys";
};

/**
 * @type object
 */
export type PermissionsSearchResourceProviderKeyResponses = {
  "200": PermissionsSearchResourceProviderKeyStatus200;
  "400": PermissionsSearchResourceProviderKeyStatus400;
  "401": PermissionsSearchResourceProviderKeyStatus401;
  "403": PermissionsSearchResourceProviderKeyStatus403;
  "404": PermissionsSearchResourceProviderKeyStatus404;
  "500": PermissionsSearchResourceProviderKeyStatus500;
  "501": PermissionsSearchResourceProviderKeyStatus501;
};

/**
 * @description Union of all possible responses
 */
export type PermissionsSearchResourceProviderKeyResponse =
  | PermissionsSearchResourceProviderKeyStatus200
  | PermissionsSearchResourceProviderKeyStatus400
  | PermissionsSearchResourceProviderKeyStatus401
  | PermissionsSearchResourceProviderKeyStatus403
  | PermissionsSearchResourceProviderKeyStatus404
  | PermissionsSearchResourceProviderKeyStatus500
  | PermissionsSearchResourceProviderKeyStatus501;
