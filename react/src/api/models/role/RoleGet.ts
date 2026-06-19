/* oxlint-disable */

import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";
import type { VoloAbpIdentityIdentityRoleDto } from "../volo/abp/identity/IdentityRoleDto.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type RoleGetPathId = string;

/**
 * @type object
 */
export type RoleGetStatus200Plain = VoloAbpIdentityIdentityRoleDto;

/**
 * @type object
 */
export type RoleGetStatus200Json = VoloAbpIdentityIdentityRoleDto;

/**
 * @type object
 */
export type RoleGetStatus200Json2 = VoloAbpIdentityIdentityRoleDto;

export type RoleGetStatus200 = RoleGetStatus200Plain | RoleGetStatus200Json | RoleGetStatus200Json2;

/**
 * @type object
 */
export type RoleGetStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus400 = RoleGetStatus400Plain | RoleGetStatus400Json | RoleGetStatus400Json2;

/**
 * @type object
 */
export type RoleGetStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus401 = RoleGetStatus401Plain | RoleGetStatus401Json | RoleGetStatus401Json2;

/**
 * @type object
 */
export type RoleGetStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus403 = RoleGetStatus403Plain | RoleGetStatus403Json | RoleGetStatus403Json2;

/**
 * @type object
 */
export type RoleGetStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus404 = RoleGetStatus404Plain | RoleGetStatus404Json | RoleGetStatus404Json2;

/**
 * @type object
 */
export type RoleGetStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus500 = RoleGetStatus500Plain | RoleGetStatus500Json | RoleGetStatus500Json2;

/**
 * @type object
 */
export type RoleGetStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type RoleGetStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type RoleGetStatus501 = RoleGetStatus501Plain | RoleGetStatus501Json | RoleGetStatus501Json2;

/**
 * @type object
 */
export type RoleGetRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: RoleGetPathId;
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
export type RoleGetResponses = {
  "200": RoleGetStatus200;
  "400": RoleGetStatus400;
  "401": RoleGetStatus401;
  "403": RoleGetStatus403;
  "404": RoleGetStatus404;
  "500": RoleGetStatus500;
  "501": RoleGetStatus501;
};

/**
 * @description Union of all possible responses
 */
export type RoleGetResponse =
  | RoleGetStatus200
  | RoleGetStatus400
  | RoleGetStatus401
  | RoleGetStatus403
  | RoleGetStatus404
  | RoleGetStatus500
  | RoleGetStatus501;
