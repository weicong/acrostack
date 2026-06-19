/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityRoleDto } from "../volo/abp/identity/IdentityRoleDto.ts";
import type { VoloAbpIdentityIdentityRoleUpdateDto } from "../volo/abp/identity/IdentityRoleUpdateDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type RoleUpdatePathId = string;

/**
 * @type object
 */
export type RoleUpdateStatus200Plain = VoloAbpIdentityIdentityRoleDto;

/**
 * @type object
 */
export type RoleUpdateStatus200Json = VoloAbpIdentityIdentityRoleDto;

/**
 * @type object
 */
export type RoleUpdateStatus200Json2 = VoloAbpIdentityIdentityRoleDto;

export type RoleUpdateStatus200 =
  | RoleUpdateStatus200Plain
  | RoleUpdateStatus200Json
  | RoleUpdateStatus200Json2;

/**
 * @type object
 */
export type RoleUpdateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus400 =
  | RoleUpdateStatus400Plain
  | RoleUpdateStatus400Json
  | RoleUpdateStatus400Json2;

/**
 * @type object
 */
export type RoleUpdateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus401 =
  | RoleUpdateStatus401Plain
  | RoleUpdateStatus401Json
  | RoleUpdateStatus401Json2;

/**
 * @type object
 */
export type RoleUpdateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus403 =
  | RoleUpdateStatus403Plain
  | RoleUpdateStatus403Json
  | RoleUpdateStatus403Json2;

/**
 * @type object
 */
export type RoleUpdateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus404 =
  | RoleUpdateStatus404Plain
  | RoleUpdateStatus404Json
  | RoleUpdateStatus404Json2;

/**
 * @type object
 */
export type RoleUpdateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus500 =
  | RoleUpdateStatus500Plain
  | RoleUpdateStatus500Json
  | RoleUpdateStatus500Json2;

/**
 * @type object
 */
export type RoleUpdateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleUpdateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleUpdateStatus501 =
  | RoleUpdateStatus501Plain
  | RoleUpdateStatus501Json
  | RoleUpdateStatus501Json2;

/**
 * @type object | undefined
 */
export type RoleUpdateJsonData =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type RoleUpdateJson2Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleUpdateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type RoleUpdateJson3Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleUpdateDto>, "extraProperties">
  | undefined;

export type RoleUpdateData = RoleUpdateJsonData | RoleUpdateJson2Data | RoleUpdateJson3Data;

/**
 * @type object
 */
export type RoleUpdateRequestConfig = {
  data?: RoleUpdateData;
  /**
   * @type object
   */
  pathParams: {
    id: RoleUpdatePathId;
  };
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: `/api/identity/roles/${string}`;
};

/**
 * @type object
 */
export type RoleUpdateResponses = {
  "200": RoleUpdateStatus200;
  "400": RoleUpdateStatus400;
  "401": RoleUpdateStatus401;
  "403": RoleUpdateStatus403;
  "404": RoleUpdateStatus404;
  "500": RoleUpdateStatus500;
  "501": RoleUpdateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RoleUpdateResponse =
  | RoleUpdateStatus200
  | RoleUpdateStatus400
  | RoleUpdateStatus401
  | RoleUpdateStatus403
  | RoleUpdateStatus404
  | RoleUpdateStatus500
  | RoleUpdateStatus501;
