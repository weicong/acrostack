/* oxlint-disable */

import type { VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull } from "../volo/abp/application/dtos/listResultDto1Volo/abp/identity/identityRoleDtoVolo/abp/identity/application/ContractsVersion10500CultureneutralPublicKeyTokennull.ts";
import type { VoloAbpHttpRemoteServiceErrorResponse } from "../volo/abp/http/RemoteServiceErrorResponse.ts";

/**
 * @description
 * Format: `uuid`
 * @type string
 */
export type UserGetRolesPathId = string;

/**
 * @type object
 */
export type UserGetRolesStatus200Plain =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserGetRolesStatus200Json =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

/**
 * @type object
 */
export type UserGetRolesStatus200Json2 =
  VoloAbpApplicationDtosListResultDto1VoloAbpIdentityIdentityRoleDtoVoloAbpIdentityApplicationContractsVersion10500CultureneutralPublicKeyTokennull;

export type UserGetRolesStatus200 =
  | UserGetRolesStatus200Plain
  | UserGetRolesStatus200Json
  | UserGetRolesStatus200Json2;

/**
 * @type object
 */
export type UserGetRolesStatus400Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus400Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus400Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus400 =
  | UserGetRolesStatus400Plain
  | UserGetRolesStatus400Json
  | UserGetRolesStatus400Json2;

/**
 * @type object
 */
export type UserGetRolesStatus401Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus401Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus401Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus401 =
  | UserGetRolesStatus401Plain
  | UserGetRolesStatus401Json
  | UserGetRolesStatus401Json2;

/**
 * @type object
 */
export type UserGetRolesStatus403Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus403Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus403Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus403 =
  | UserGetRolesStatus403Plain
  | UserGetRolesStatus403Json
  | UserGetRolesStatus403Json2;

/**
 * @type object
 */
export type UserGetRolesStatus404Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus404Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus404Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus404 =
  | UserGetRolesStatus404Plain
  | UserGetRolesStatus404Json
  | UserGetRolesStatus404Json2;

/**
 * @type object
 */
export type UserGetRolesStatus500Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus500Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus500Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus500 =
  | UserGetRolesStatus500Plain
  | UserGetRolesStatus500Json
  | UserGetRolesStatus500Json2;

/**
 * @type object
 */
export type UserGetRolesStatus501Plain = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus501Json = VoloAbpHttpRemoteServiceErrorResponse;

/**
 * @type object
 */
export type UserGetRolesStatus501Json2 = VoloAbpHttpRemoteServiceErrorResponse;

export type UserGetRolesStatus501 =
  | UserGetRolesStatus501Plain
  | UserGetRolesStatus501Json
  | UserGetRolesStatus501Json2;

/**
 * @type object
 */
export type UserGetRolesRequestConfig = {
  data?: never;
  /**
   * @type object
   */
  pathParams: {
    id: UserGetRolesPathId;
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
export type UserGetRolesResponses = {
  "200": UserGetRolesStatus200;
  "400": UserGetRolesStatus400;
  "401": UserGetRolesStatus401;
  "403": UserGetRolesStatus403;
  "404": UserGetRolesStatus404;
  "500": UserGetRolesStatus500;
  "501": UserGetRolesStatus501;
};

/**
 * @description Union of all possible responses
 */
export type UserGetRolesResponse =
  | UserGetRolesStatus200
  | UserGetRolesStatus400
  | UserGetRolesStatus401
  | UserGetRolesStatus403
  | UserGetRolesStatus404
  | UserGetRolesStatus500
  | UserGetRolesStatus501;
