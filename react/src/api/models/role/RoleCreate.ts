/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityRoleCreateDto } from "../volo/abp/identity/IdentityRoleCreateDto.ts";
import type { VoloAbpIdentityIdentityRoleDto } from "../volo/abp/identity/IdentityRoleDto.ts";

/**
 * @type object
 */
export type RoleCreateStatus200Plain = VoloAbpIdentityIdentityRoleDto;

/**
 * @type object
 */
export type RoleCreateStatus200Json = VoloAbpIdentityIdentityRoleDto;

/**
 * @type object
 */
export type RoleCreateStatus200Json2 = VoloAbpIdentityIdentityRoleDto;

export type RoleCreateStatus200 =
  | RoleCreateStatus200Plain
  | RoleCreateStatus200Json
  | RoleCreateStatus200Json2;

/**
 * @type object
 */
export type RoleCreateStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus400 =
  | RoleCreateStatus400Plain
  | RoleCreateStatus400Json
  | RoleCreateStatus400Json2;

/**
 * @type object
 */
export type RoleCreateStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus401 =
  | RoleCreateStatus401Plain
  | RoleCreateStatus401Json
  | RoleCreateStatus401Json2;

/**
 * @type object
 */
export type RoleCreateStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus403 =
  | RoleCreateStatus403Plain
  | RoleCreateStatus403Json
  | RoleCreateStatus403Json2;

/**
 * @type object
 */
export type RoleCreateStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus404 =
  | RoleCreateStatus404Plain
  | RoleCreateStatus404Json
  | RoleCreateStatus404Json2;

/**
 * @type object
 */
export type RoleCreateStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus500 =
  | RoleCreateStatus500Plain
  | RoleCreateStatus500Json
  | RoleCreateStatus500Json2;

/**
 * @type object
 */
export type RoleCreateStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleCreateStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleCreateStatus501 =
  | RoleCreateStatus501Plain
  | RoleCreateStatus501Json
  | RoleCreateStatus501Json2;

/**
 * @type object | undefined
 */
export type RoleCreateJsonData =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type RoleCreateJson2Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleCreateDto>, "extraProperties">
  | undefined;

/**
 * @type object | undefined
 */
export type RoleCreateJson3Data =
  | Omit<NonNullable<VoloAbpIdentityIdentityRoleCreateDto>, "extraProperties">
  | undefined;

export type RoleCreateData = RoleCreateJsonData | RoleCreateJson2Data | RoleCreateJson3Data;

/**
 * @type object
 */
export type RoleCreateRequestConfig = {
  data?: RoleCreateData;
  pathParams?: never;
  queryParams?: never;
  headerParams?: never;
  /**
   * @type string
   */
  url: "/api/identity/roles";
};

/**
 * @type object
 */
export type RoleCreateResponses = {
  "200": RoleCreateStatus200;
  "400": RoleCreateStatus400;
  "401": RoleCreateStatus401;
  "403": RoleCreateStatus403;
  "404": RoleCreateStatus404;
  "500": RoleCreateStatus500;
  "501": RoleCreateStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RoleCreateResponse =
  | RoleCreateStatus200
  | RoleCreateStatus400
  | RoleCreateStatus401
  | RoleCreateStatus403
  | RoleCreateStatus404
  | RoleCreateStatus500
  | RoleCreateStatus501;
