/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityUserUpdateRolesDto } from "../volo/abp/identity/IdentityUserUpdateRolesDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserUpdateRolesPathId = string;

/**
 * @type any
 */
export type UserUpdateRolesStatus200 = any;

/**
 * @type any
 */
export type UserUpdateRolesStatus204 = any;

/**
 * @type object
 */
export type UserUpdateRolesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus400 =
  | UserUpdateRolesStatus400Plain
  | UserUpdateRolesStatus400Json
  | UserUpdateRolesStatus400Json2;

/**
 * @type object
 */
export type UserUpdateRolesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus401 =
  | UserUpdateRolesStatus401Plain
  | UserUpdateRolesStatus401Json
  | UserUpdateRolesStatus401Json2;

/**
 * @type object
 */
export type UserUpdateRolesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus403 =
  | UserUpdateRolesStatus403Plain
  | UserUpdateRolesStatus403Json
  | UserUpdateRolesStatus403Json2;

/**
 * @type object
 */
export type UserUpdateRolesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus404 =
  | UserUpdateRolesStatus404Plain
  | UserUpdateRolesStatus404Json
  | UserUpdateRolesStatus404Json2;

/**
 * @type object
 */
export type UserUpdateRolesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus500 =
  | UserUpdateRolesStatus500Plain
  | UserUpdateRolesStatus500Json
  | UserUpdateRolesStatus500Json2;

/**
 * @type object
 */
export type UserUpdateRolesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserUpdateRolesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserUpdateRolesStatus501 =
  | UserUpdateRolesStatus501Plain
  | UserUpdateRolesStatus501Json
  | UserUpdateRolesStatus501Json2;

/**
 * @type object | undefined
 */
export type UserUpdateRolesJsonData = VoloAbpIdentityIdentityUserUpdateRolesDto | undefined;

/**
 * @type object | undefined
 */
export type UserUpdateRolesJson2Data = VoloAbpIdentityIdentityUserUpdateRolesDto | undefined;

/**
 * @type object | undefined
 */
export type UserUpdateRolesJson3Data = VoloAbpIdentityIdentityUserUpdateRolesDto | undefined;

export type UserUpdateRolesData =
  | UserUpdateRolesJsonData
  | UserUpdateRolesJson2Data
  | UserUpdateRolesJson3Data;

/**
 * @type object
 */
export type UserUpdateRolesRequestConfig = {
  data?: UserUpdateRolesData;
  /**
   * @type object
   */
  pathParams: {
    id: UserUpdateRolesPathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/users/${string}/roles`;
};

/**
 * @type object
 */
export type UserUpdateRolesResponses = {
  "200": UserUpdateRolesStatus200;
  "204": UserUpdateRolesStatus204;
  "400": UserUpdateRolesStatus400;
  "401": UserUpdateRolesStatus401;
  "403": UserUpdateRolesStatus403;
  "404": UserUpdateRolesStatus404;
  "500": UserUpdateRolesStatus500;
  "501": UserUpdateRolesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserUpdateRolesResponse =
  | UserUpdateRolesStatus200
  | UserUpdateRolesStatus204
  | UserUpdateRolesStatus400
  | UserUpdateRolesStatus401
  | UserUpdateRolesStatus403
  | UserUpdateRolesStatus404
  | UserUpdateRolesStatus500
  | UserUpdateRolesStatus501;
